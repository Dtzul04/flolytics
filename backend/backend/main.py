from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from pydantic import BaseModel
from dotenv import load_dotenv
import os
import requests

from pathlib import Path

app = FastAPI()

frontend_dir = Path(__file__).resolve().parent / "frontend"
if frontend_dir.exists():
    app.mount("/static", StaticFiles(directory=str(frontend_dir)), name="static")
else:
    print(f"Warning: frontend directory not found at {frontend_dir}, static files not mounted")

load_dotenv()
GROQ_API_KEY = os.getenv("GROQ_API_KEY")
conversation_history = []

class ChatRequest(BaseModel):
    user_input: str

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    index_file = frontend_dir / "index.html"
    if index_file.exists():
        return FileResponse(str(index_file))
    return {"message": "Frontend not found."}

@app.post("/api/chat")
async def chat(request: ChatRequest):
    user_message = request.user_input
    print("User said:", user_message)

    if not GROQ_API_KEY:
        return {"error": "Missing GROQ_API_KEY in .env file."}
    
    conversation_history.append({"role": "user", "content": user_message})

    url = "https://api.groq.com/openai/v1/chat/completions"
    headers = {
        "Authorization": f"Bearer {GROQ_API_KEY}",
        "Content-Type": "application/json",
    }
    data = {
        "model": "llama-3.1-8b-instant",
        "messages": [
            {
                "role": "system",
                "content": "You are **Flolytics**, a friendly and confident AI financial assistant. "
                        "You speak with a clear, helpful, and slightly energetic tone—like a coach who loves helping users understand money. "
                        "Keep responses short, warm, and focused on smart finance guidance, but sound natural and conversational. "
                        "Use plain words instead of jargon."
            },
            *conversation_history,
        ],
    }

    try:
        res = requests.post(url, headers=headers, json=data, timeout=20)
        res.raise_for_status()
        response_json = res.json()
        ai_reply = None
        choices = response_json.get("choices") or []
        if isinstance(choices, list) and len(choices) > 0:
            first = choices[0]
            if isinstance(first, dict):
                message = first.get("message") or first
                if isinstance(message, dict):
                    ai_reply = message.get("content") or message.get("text")
                elif isinstance(message, str):
                    ai_reply = message

        if not ai_reply:
            ai_reply = response_json.get("text") or response_json.get("message") or str(response_json)
        conversation_history.append({"role": "assistant", "content": ai_reply})
        return {"reply": ai_reply}
    except requests.RequestException as e:
        print("Error contacting Groq:", e)
        return {"reply": "Could not reach Groq API."}
    except Exception as e:
        print("Unexpected error:", e)
        return {"reply": "An unexpected error occurred."}

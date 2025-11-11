from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv
import os
import requests

load_dotenv()
GROQ_API_KEY = os.getenv("GROQ_API_KEY")
conversation_history = []

class ChatRequest(BaseModel):
    user_input: str

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://flolytics-frontend.onrender.com", 
        "http://localhost:8000",                  
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "Hello from FastAPI backend!"}

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
        "content": (
            "You are **Flolytics**, a friendly and confident AI financial assistant. "
            "You speak with a clear, helpful, and slightly energetic tone—like a coach who loves helping users understand money. "
            "Keep responses short, warm, and focused on smart finance guidance, but sound natural and conversational. "
            "Use plain words instead of jargon."
            )
        },
        {"role": "user", "content": user_message}
    ]
    }

    try:
        res = requests.post(url, headers=headers, json=data, timeout=20)
        res.raise_for_status()
        response_json = res.json()
        ai_reply = response_json["choices"][0]["message"]["content"]

        conversation_history.append({"role": "assistant", "content": ai_reply})

        return {"reply": ai_reply}
    except Exception as e:
        print("Error contacting Groq:", e)
        return {"reply": "Could not reach Groq API."}

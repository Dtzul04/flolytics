from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv
import os
import requests

load_dotenv()
GROQ_API_KEY = os.getenv("GROQ_API_KEY")

class ChatRequest(BaseModel):
    user_input: str

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "Hello from FastAPI backend!"}

@app.post("/api/chat")
def chat(request: ChatRequest):
    user_message = request.user_input
    print("User said:", user_message)

    if not GROQ_API_KEY:
        return {"error": "Missing GROQ_API_KEY in .env file."}

    url = "https://api.groq.com/openai/v1/chat/completions"
    headers = {
        "Authorization": f"Bearer {GROQ_API_KEY}",
        "Content-Type": "application/json"
    }
    data = {
        "model": "llama-3.1-8b-instant",  # ✅ confirmed available
        "messages": [
            {
            "role": "system", 
            "content": "You are a helpful AI assistant. Reply in one short paragraph."
            },
            {"role": "user", "content": user_message}
        ]
    }

    try:
        res = requests.post(url, headers=headers, json=data, timeout=20)
        res.raise_for_status()
        response_json = res.json()
        ai_reply = response_json["choices"][0]["message"]["content"]
        return {"reply": ai_reply}
    except Exception as e:
        print("Error contacting Groq:", e)
        return {"reply": "⚠️ Could not reach Groq API."}

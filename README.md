# Flolytics

Flolytics is an AI-powered financial tool designed to help users manage finances smartly and "fly with numbers." It provides an interactive chat interface where users can ask finance-related questions and receive helpful responses.

---

## Features

- Chat interface with AI responses.
- AI introduces itself as Flolytics, your personal finance assistant.
- Built with **FastAPI** for backend and **Alpine.js + TailwindCSS** for frontend.
- Handles user messages and AI replies in a conversational format.

---

## Project Structure

flolytics/
├─ backend/ # FastAPI backend code
├─ frontend/ # HTML, JS, CSS files
├─ .venv/ # Python virtual environment
├─ requirements.txt # Python dependencies
└─ README.md

yaml
Copy code

---

## Setup and Run Locally

### Backend

1. Activate your virtual environment:
```bash
source .venv/bin/activate
Install dependencies:

bash
Copy code
pip install -r requirements.txt
Set environment variables in .env:

env
Copy code
GROQ_API_KEY=your_groq_api_key_here
Run the FastAPI server:

bash
Copy code
uvicorn main:app --reload
The backend will be available at http://127.0.0.1:8000.

Frontend
Open index.html in a browser.

The chat interface will connect to your running backend.

Deployment
You can deploy the project using Render:

Push your latest changes to GitHub.

Connect your GitHub repository to Render.

Configure build and start commands:

Build Command: pip install -r requirements.txt

Start Command: uvicorn backend.main:app --host 0.0.0.0 --port 10000

Add environment variable GROQ_API_KEY in Render settings.

Notes
Make sure to use a valid Groq API key.

The AI chat is preloaded with a welcome message:
"My name is Flolytics, an AI Financial Tool to help you handle finances smartly and fly with numbers. How can I help you today?"
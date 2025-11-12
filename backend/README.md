# Flolytics

Flolytics is an AI-powered financial tool designed to help users manage finances smartly and "fly with numbers." It provides an interactive chat interface where users can ask finance-related questions and receive helpful responses.

---
## Live Demo

You can try Flolytics live at: [https://flolytics-2025.onrender.com](https://flolytics-2025.onrender.com)


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
├─ .vscode/ # VSCode settings folder
├─ .gitignore # Git ignore file
├─ README.md # Project README
├─ requirements.txt # Python dependencies file

---

## Setup and Run Locally

### Backend

1. Activate your virtual environment:

    ```bash
    source .venv/bin/activate
    ```

2. Install dependencies:

    ```bash
    pip install -r requirements.txt
    ```

3. Set environment variables in `.env`:

    ```
    GROQ_API_KEY=your_groq_api_key_here
    ```

4. Run the FastAPI server:

    ```bash
    uvicorn main:app --reload
    ```

The backend will be available at [http://127.0.0.1:8000](http://127.0.0.1:8000).

### Frontend

Open `index.html` in a browser.

The chat interface will connect to your running backend.

---

## Deployment

You can deploy the project using Render:

1. Push your latest changes to GitHub.
2. Connect your GitHub repository to Render.
3. Configure build and start commands:

    - Build Command: `pip install -r requirements.txt`
    - Start Command: `uvicorn backend.main:app --host 0.0.0.0 --port 10000`

4. Add environment variable `GROQ_API_KEY` in Render settings.

---

## Notes

- Make sure to use a valid Groq API key.
- The AI chat is preloaded with a welcome message:
  > "Hey there! I’m Flolytics — your AI financial sidekick. I help you handle money smartly and fly with your goals. What’s on your mind today?"
- This project uses **ChatGPT** technology for AI responses.

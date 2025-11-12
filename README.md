# Flolytics

Flolytics is an AI-powered financial assistant that helps users manage money smartly through an interactive chat interface.

---

## Live Demo

Try Flolytics live at: [https://flolytics-2025.onrender.com](https://flolytics-2025.onrender.com)

---

## Features

- Conversational chat interface powered by AI.
- AI introduces itself as Flolytics, your friendly finance coach.
- Backend built with **FastAPI**.
- Frontend built with **Alpine.js** and **TailwindCSS**.
- Seamless communication between frontend and backend.

---

## Project Structure

```
flolytics/
├── backend/               # FastAPI backend code and frontend static files
│   ├── frontend/          # Frontend static assets: index.html, app.js, style.css
│   ├── main.py            # FastAPI app entry point
│   ├── requirements.txt   # Python dependencies
│   └── .env               # Environment variables (not committed)
│   └── requirements.txt               # Environment variables (not committed)
├── README.md              # This README file
└── .gitignore             # Git ignore rules
```

---

## Setup and Run Locally

### 1. Activate Virtual Environment

```bash
source .venv/bin/activate
```

### 2. Install Dependencies

```bash
pip install -r backend/requirements.txt
```

### 3. Configure Environment Variables

Create a `.env` file inside the `backend/` folder with:

```
GROQ_API_KEY=your_groq_api_key_here
```

### 4. Run the Backend Server

```bash
uvicorn backend.main:app --reload
```

Backend will be accessible at [http://127.0.0.1:8000](http://127.0.0.1:8000).

### 5. Open Frontend

Open the file `backend/frontend/index.html` directly in your browser for local testing.

The frontend will connect to your running backend automatically.

---

## Deployment on Render

1. Push your latest code to GitHub.
2. Create a new web service on Render linked to your GitHub repo.
3. Set the **Root Directory** to `backend`.
4. Set the build command:

```
pip install -r requirements.txt
```

5. Set the start command:

```
uvicorn main:app --host 0.0.0.0 --port 10000
```

6. Add environment variable on Render:

```
GROQ_API_KEY=your_groq_api_key_here
```

7. Deploy and access your live site at Render’s assigned URL or your custom domain.

---

## Notes

- Keep your Groq API key secure and never commit it to GitHub.
- The AI starts the chat with:

> "Hey there! I’m Flolytics — your AI financial sidekick. I help you handle money smartly and fly with your goals. What’s on your mind today?"

- Uses Groq API for AI-powered chat completions.

---

If you want, I can generate the `.gitignore` and `.env.example` files for you too! Just ask.
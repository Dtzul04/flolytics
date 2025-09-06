# Flolytics

Flolytics is a project that combines a **frontend chat app** and a **backend Java service**.  
The chat app helps users interact with financial data in a simple conversational interface.

---

## 📂 Project Structure

flolytics/
├── backend-java/ # Java backend service (with environment files installed)
├── frontend/ # Chat UI (index.html, style.css, app.js)
└── docs/ # Project documentation

---

## 🚀 Frontend (Chat App)

- Built with **HTML, TailwindCSS, and Alpine.js**.  
- `index.html` provides the chat layout.  
- `app.js` will handle chat logic and connect to Groq AI.  
- `style.css` will refine the UI styling.  

## ⚙️ Backend (Java)

- Runs the server-side logic and communicates with Groq AI API.  
- Will eventually handle requests from the frontend chat.  
- Already includes environment files for setup.  

---

## 🛠️ Setup

1. **Frontend**  
   - Open `frontend/index.html` in a browser to test the chat UI.  
   - JS and CSS files are linked inside `index.html`.  

2. **Backend**  
   - Will be configured later once frontend is stable.  
   - Will provide endpoints for Groq AI integration.  

---
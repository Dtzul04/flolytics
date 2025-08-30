# Flolytics System Architecture

## Components

1. **Backend** (Java + Spring Boot)
   - Handles API requests, chat logic, and AI integration
   - Runs on port 8080
   - Connects to PostgreSQL Docker container for data storage

2. **Frontend** (HTML + Tailwind CSS + Alpine.js)
   - Chat interface and UI
   - Communicates with backend via fetch/AJAX

3. **AI Integration**
   - OpenAI API called from Java backend

4. **Database**
   - PostgreSQL running in Docker
   - Stores user and financial data

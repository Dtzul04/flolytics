# Flolytics

Flolytics is a full-stack project with a **Spring Boot backend** and a **frontend** (framework of your choice, e.g., React, Vue, or plain HTML/JS).

---

## Project Structure

```
flolytics/
├── backend/      # Spring Boot backend (Java, Maven)
├── frontend/     # Frontend app (e.g., React, Vue, or plain JS)
├── src/          # Default Spring Boot source folder
├── Dockerfile    # Container setup
├── README.md
```

---

## Backend (Spring Boot)

### Requirements

* Java 17+ (or the version Spring Boot supports)
* Maven

### Run the backend

```bash
cd backend
mvn spring-boot:run
```

The backend will start on:
👉 [http://localhost:8080](http://localhost:8080)

Endpoints:

* `GET /hello` → Returns a hello message
* `POST /chat` → Accepts a JSON body like:

  ```json
  { "message": "Hello!" }
  ```

  Responds with:

  ```
  You said: Hello!
  ```

---

## Frontend

### Setup

Go into the frontend folder:

```bash
cd frontend
```

If it’s a Node.js project:

```bash
npm install
npm run dev   # or npm start depending on setup
```

Runs on:
👉 [http://localhost:3000](http://localhost:3000)

---

## Docker (Optional)

You can also build and run the project in a container.

### Build image

```bash
docker build -t flolytics .
```

### Run container

```bash
docker run -p 8080:8080 flolytics
```

Backend will be available at:
👉 [http://localhost:8080](http://localhost:8080)

---

## Development Workflow

* Start backend: `mvn spring-boot:run`
* Start frontend: `npm run dev`
* Or use Docker for a containerized run.

---

## License

This project is for learning purposes. Update with your preferred license.

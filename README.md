# MERN Stack To-Do List Application

## Project Overview

This project is a To-Do List web application developed using the MERN stack (MongoDB, Express.js, React.js, and Node.js). It allows users to add tasks, mark tasks as completed or incomplete, view their tasks, and delete tasks.

## Technologies Used

- **MongoDB Atlas** – Database for storing tasks
- **Express.js** – Backend REST API
- **React.js** – Frontend user interface
- **Node.js** – JavaScript runtime for the backend
- **Mongoose** – MongoDB object modeling
- **Axios** – Connecting the frontend to the backend
- **Vite** – React development server

## Features

- Add new tasks
- Display all tasks
- Mark tasks as completed or incomplete
- Delete tasks
- Store tasks in MongoDB
- Update the interface without reloading the page

## Project Structure

```text
Assignment2_MERN_ToDoList/
├── backend/
│   ├── models/
│   │   └── Task.js
│   ├── server.js
│   ├── package.json
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── index.css
│   ├── package.json
│   └── README.md
├── screenshots/
└── README.md
```

## Installation and Execution

### 1. Start the Backend

Open a terminal and navigate to the backend folder:

```bash
cd backend
npm install
```

Create a `.env` file in the backend folder and configure your MongoDB Atlas connection:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Start the backend server:

```bash
npm run dev
```

The backend runs at `http://localhost:5000`.

### 2. Start the Frontend

Open a second terminal and navigate to the frontend folder:

```bash
cd frontend
npm install
npm run dev
```

Open the local URL displayed in the terminal, usually `http://localhost:5173`.

Keep both servers running while using the application.

## REST API Endpoints

## REST API Endpoints

- **GET `/api/tasks`** – Retrieve all tasks.
- **POST `/api/tasks`** – Add a new task.
- **PUT `/api/tasks/:id`** – Update a task or mark it as completed.
- **DELETE `/api/tasks/:id`** – Delete a task.

## Task Schema

Each task contains the following fields:

- `title` – String, required
- `completed` – Boolean, defaults to `false`
- `createdAt` – Date, defaults to the current date and time

## Conclusion

This project demonstrates the implementation of CRUD operations using the MERN stack, along with REST API integration, database connectivity, and a React-based user interface.
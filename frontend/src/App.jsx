import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const API_URL = "http://localhost:5000/api/tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(API_URL);
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const addTask = async (event) => {
    event.preventDefault();

    if (!title.trim()) return;

    try {
      const response = await axios.post(API_URL, {
        title: title.trim(),
      });

      setTasks((previousTasks) => [
        response.data,
        ...previousTasks,
      ]);

      setTitle("");
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const toggleTask = async (task) => {
    try {
      const response = await axios.put(
        `${API_URL}/${task._id}`,
        { completed: !task.completed }
      );

      setTasks((previousTasks) =>
        previousTasks.map((item) =>
          item._id === task._id ? response.data : item
        )
      );
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);

      setTasks((previousTasks) =>
        previousTasks.filter((task) => task._id !== id)
      );
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div className="app">
      <div className="todo-container">
        <h1>My To-Do List</h1>

        <p className="subtitle">
          Stay organized, one task at a time.
        </p>

        <form onSubmit={addTask} className="task-form">
          <input
            type="text"
            placeholder="Enter a new task..."
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />

          <button type="submit">Add Task</button>
        </form>

        <div className="task-list">
          {tasks.length === 0 ? (
            <p className="empty-message">
              No tasks yet. Add your first task!
            </p>
          ) : (
            tasks.map((task) => (
              <div
                className={`task ${task.completed ? "completed" : ""}`}
                key={task._id}
              >
                <label className="task-left">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task)}
                  />

                  <span>{task.title}</span>
                </label>

                <button
                  type="button"
                  className="delete-button"
                  onClick={() => deleteTask(task._id)}
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>

        <p className="task-count">
          {tasks.filter((task) => !task.completed).length} tasks remaining
        </p>
      </div>
    </div>
  );
}

export default App;
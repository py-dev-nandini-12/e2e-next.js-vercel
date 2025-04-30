import { useState } from "react";

export default function TaskList() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const removeTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        borderRadius: "8px",
        marginTop: "20px",
      }}
    >
      <h3>Task List</h3>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTask} style={{ marginLeft: "10px" }}>
        Add Task
      </button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} style={{ marginTop: "10px" }}>
            {task}
            <button
              onClick={() => removeTask(index)}
              style={{ marginLeft: "10px", color: "red" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

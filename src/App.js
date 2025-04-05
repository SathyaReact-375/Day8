import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask.trim()]);
      setNewTask('');
    }
  };

  const removeTask = (indexToRemove) => {
    setTasks(tasks.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Day 8 Task</h1>
      <input
        type="text"
        value={newTask}
        onChange={handleInputChange}
        placeholder="Enter new task"
      />
      <button onClick={addTask}>add</button>

      <ul style={{ listStyleType: "none" }}>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => removeTask(index)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App; 
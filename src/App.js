import React, { useState } from 'react';

function App() {
  const [arr, setArr] = useState(["task", "task", "task"]);

  const add = () => {
    setArr([...arr, `task`]);
    
  };

  const remove = (indexToRemove) => {
    setArr(arr.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Day 8 Task</h1>
      <ul style={{listStyleType:"none"}}>
        {arr.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => remove(index)}>x</button>
          </li>
        ))}
      </ul>
      <button onClick={add}>add</button>
    </div>
  );
}

export default App;
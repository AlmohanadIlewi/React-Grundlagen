/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
/*import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() === '') return;
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask('');
  };

  const handleToggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>Task List</h1>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Add a new task..."
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleTask(index)}
            />
            <span className={task.completed ? 'completed' : ''}>{task.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
*/

// ToDoListe von Martin
import './App.css';
import React from 'react';


function App() {
  const [todos, setTodos] = React.useState([]);
  const [inputValue, setInputValue] = React.useState('');

  const handleClick = () => {
    const task = {
      text: inputValue,
      checked: false    
    }
    setTodos([...todos, task]);
    setInputValue('');
  }

  const toogleCheck = (index) => {
    const newTodos = [...todos];
    newTodos[index].checked = !newTodos[index].checked;
    setTodos(newTodos);
  }

  return (
    <>
      <h1>My ToDo List</h1>
      <input type="text" placeholder="Add a new task" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={handleClick}>ToDo hinzufügen</button> <b>

      </b>
      <button onClick={() => setTodos([])}>Alle löschen</button>
      <br />
      <ul >
        {todos.map((task, index) => {
          return (
            <li>
              <label className={task.checked ? "done" : ""}><input type="checkbox" onClick={() => toogleCheck(index)}/> {task.text}</label>
            </li>
          );})}
      </ul>
    </>
  );
}

export default App;

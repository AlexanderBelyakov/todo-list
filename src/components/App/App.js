import './App.css';

import { ToDoList } from '../ToDoList/ToDoList';
import { useState } from 'react';
import { Input } from '../Input/Input';

// const arr =[
//   {
//     _id: 'qwesa',
//     taskText: 'be happy',
//     isSolved: false
//   },
//   {
//     _id: 'qadasdqa',
//     taskText: 'buy house',
//     isSolved: false
//   },
//   {
//     _id: '312321qwdas',
//     taskText: 'solve tests',
//     isSolved: false
//   },
// ]

function App() {
  
  const [tasks, setTasks] = useState([])

  function handleSolveTask(id) {
    const copy = [...tasks]
    const current = copy.find(task => task._id === id)
    current.isSolved = !current.isSolved
    setTasks(copy)
  }

  function handleDeleteTask(id) {
    setTasks([...tasks].filter(task => task._id !== id))
  }

  return (
    <div className="app">
      <header className="App-header">
        <h1>to do list</h1>
      </header>
      <Input 
      setTasks={setTasks}
      />
      <ToDoList 
      tasksList={tasks}
      onSolveTask={handleSolveTask}
      onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;

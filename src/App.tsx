import './App.css'
import {Form} from './Components/Form'
import {List} from './Components/List'
import { useState } from 'react'

function App() {

const [tasks, setTasks] = useState([]);
const [nextId, setNextId] = useState(1);

 const addTask = (text) => {
    const newTasks = [...tasks, { id: nextId, text, completed: false }];
    setTasks(newTasks);
    setNextId(nextId + 1); 
  };

const toggleTaskCompletion = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

const deleteTask = (id) => {
    const remainingTasks = tasks.filter((task) => task.id !== id);
    setTasks(remainingTasks);
  };


  return (
  <>
  <h1>My To Do List</h1>
  <Form AddTask={addTask} />
  <List
          tasks={tasks}
          onToggleComplete={toggleTaskCompletion}
          onDeleteTask={deleteTask}
        />
    </>
  )
}

export default App

import './App.css'
import {Form} from './Components/Form'
import {List} from './Components/List'
import { useState } from 'react'

function App() {

const [tasks, setTasks] = useState([]);
const [nextId, setNextId] = useState(1);

const addTask = (task) => {
  const newTasks = [...tasks, { id: nextId, task, completed: false }];
  setTasks(newTasks);
  setNextId(nextId + 1)
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
  <h1>Tasks</h1>
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

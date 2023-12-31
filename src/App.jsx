import { useState, useEffect } from "react"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import About from "./components/About"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"

function App() {

  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] =useState([])

  useEffect(()=>{
    const getTasks= async () =>{
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  },[])

  //Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }

  //Fetch single task
  const fetchTask = async (id) =>{
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    return data
  }

  // Add Task
  const addTask = async (task) =>{
    const res = await fetch('http://localhost:5000/tasks',{
      method: 'POST',
      headers: {
        'Content-type' : 'application/json'
      },
      body: JSON.stringify(task)
    })
    const data = await res.json()
    
    setTasks([...tasks, data])
  }

   //delete task
   const deleteTask = async (id)=>{

    await fetch(`http://localhost:5000/tasks/${id}`,
    {method: 'DELETE'})
    setTasks(tasks.filter((task)=> task.id !==id,
    console.log(id)
    ))
}
//toggle reminder
const reminder = async (id)=>{
const taskToToggle = await fetchTask(id)
const updatedTask = {...taskToToggle, reminder: !taskToToggle.reminder}

const res = await fetch(`http://localhost:5000/tasks/${id}`,{
  method: 'PUT',
  headers:{
    'Content-type': 'applicaiton/json'
  },
  body: JSON.stringify(updatedTask)
})

const data = res.json()

  setTasks(
    tasks.map((task)=>
    task.id === id ? {...task, reminder:!data.reminder}: task
    )
    
)}

  return (
    <Router>
    <>
    <Header onAdd={()=> setShowAddTask(!showAddTask)}/>
    <Routes>
    <Route path='/' 
    element={
      <>
      {showAddTask && <AddTask onAdd = {addTask}/>}
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={reminder}/>
      </>
    }/>
    <Route path='/about' element={<About/>}/>
    </Routes>
    <Footer />
    </>
    </Router>
  )
}

export default App

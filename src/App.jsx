import { useState, useEffect } from "react"
import Header from "./components/Header"
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

  // Add Task
  const addTask = (task) =>{
    const id = Math.floor(Math.random() * 1000)+1
    const newTask = { id, ...task}
    setTasks([...tasks,newTask])
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
const reminder = (id)=>{
  setTasks(
    tasks.map((task)=>
    task.id === id ? {...task, reminder:!task.reminder}: task
    )
    
)}

  return (
    <>
    <Header onAdd={()=> setShowAddTask(!showAddTask)}/>
    {showAddTask && <AddTask onAdd = {addTask}/>}
    <Tasks tasks={tasks} onDelete={deleteTask} onToggle={reminder}/>
    </>
  )
}

export default App

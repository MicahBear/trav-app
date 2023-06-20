import { useState } from "react"
import Header from "./components/Header"
import Tasks from "./components/Tasks"

function App() {
  const [tasks, setTasks] =useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false,
    }
])


   //delete task
   const deleteTask = (id)=>{
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
    <Header />
    <h1>Saying Hello from This file</h1>
    <Tasks tasks={tasks} onDelete={deleteTask} onToggle={reminder}/>
    </>
  )
}

export default App

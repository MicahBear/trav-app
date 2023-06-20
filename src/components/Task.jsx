import {FaTimes} from 'react-icons/fa'
const Task = ({task, onDelete, onToggle}) =>{


    
    return(
        <div className="task" onDoubleClick={()=>{onToggle(task.id)}}>
         <h3 className="task--title">{task.text}<FaTimes style={{color: 'red',cursor:'pointer'}} onClick={()=>onDelete(task.id)} /></h3>
         <p className="task--day">{task.day}</p>
        </div>
    )
}

export default Task
import { useState } from "react"



const AddTask = ({onAdd})=>{
    const [text,setText] = useState('')
    const [day, setDay] = useState('')
    const [ reminder, setReminder] = useState(false)

    const onSubmit = (e)=>{
        e.preventDefault()
        
        if(!text){
            alert('please add a task')
            return
        }
        onAdd({text,day,reminder})

        setText('')
        setDay('')
        setReminder(false)
    
    }

    return(
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="">Title of label</label>
                <input type="text" placeholder="Add Task" value={text} onChange={(e)=> setText(e.target.value)}/>
            </div>
            <div>
                <label>Day & Time</label>
                <input type="text" placeholder="Add Day & Time" value={day} onChange={(e)=> setDay(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="">Set Reminder</label>
                <input type="checkbox" checked={reminder} value={reminder} onChange={(e)=> setReminder(e.currentTarget.checked)} />
            </div>

            <input type="submit" value="Save Task"/>
        </form>
    )
}

export default AddTask
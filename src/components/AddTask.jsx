
const AddTask = ()=>{

    return(
        <form>
            <div>
                <label htmlFor=""></label>
                <input type="text" placeholder="Add Task"/>
            </div>
            <div>
                <label>Day & Time</label>
                <input type="text" placeholder="Add Day & Time"/>
            </div>
            <div>
                <label htmlFor="">Set Reminder</label>
                <input type="checkbox" />
            </div>

            <input type="submit" value="Save Task"/>
        </form>
    )
}

export default AddTask
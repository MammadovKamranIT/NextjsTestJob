import { addTask } from "@/app/taskActions/actions"

const TaskCreate = () => {



    return (
        <form action={addTask}>
            <input placeholder='text' name="text" />
            <button type="submit">Add</button>
        </form>
    )


}

export default TaskCreate


import { addTask } from "@/app/taskActions/actions"

const TaskCreate = () => {



    return (
        <form action={addTask}>
            <input placeholder='text' name="text" />
            <input placeholder='status' name="status" />
            <button type="submit">Add</button>
        </form>
    )


}

export default TaskCreate


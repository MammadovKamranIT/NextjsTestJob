import TaskCreate from '@/app/TaskCreate'
import { deleteTask, updateTask } from './actions'

const TasksPage = async () => {  
    const base_url = process.env.BASE_URL
    const response = await fetch(`${base_url}/tasksList`)
    const { tasks } = await response.json()

//   console.log(tasks)
    return (
        <div>
            {tasks.map((item: { id: string, title: string, status: string, creationtime: string }) =>
                
                <div key={item.id}>
                    <form action={updateTask.bind(null, item.id)}>
                        <span>{item.id}. </span>{item.title} {item.status} {item.creationtime}
                       
                        <input type="text" name='text' />
                        <button type='submit'>Edit</button>
                    </form>
                    <form action={deleteTask.bind(null, item.id)}>
                        <button type='submit'>Delete</button>
                    </form>
                </div>
            )}
            <TaskCreate />
        </div>
    )
}

export default TasksPage
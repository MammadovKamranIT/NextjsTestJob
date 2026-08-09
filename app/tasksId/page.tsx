import TaskCreate from '@/app/TaskCreate'
import { deleteTask, updateTask } from './actions'
import Link from 'next/link'

const TasksPage = async () => {  
    const base_url = process.env.BASE_URL
    console.log(base_url)
    const response = await fetch(`${base_url}/tasksList`)
    const { tasks } = await response.json()

  console.log(tasks)
    return (
        
        <div>
            
            {tasks.map((item: { id: string }) =>
            
            <div key={item.id}>
                
   <Link href={`/tasks/${item.id}`}>
                        <span>{item.id}</span></Link>
          
                            
           
                </div>

            )}
        
        </div>

    )

}

export default TasksPage
import TaskCreate from '@/app/TaskCreate'

import Link from 'next/link'

const TasksPage = async () => {  
    const base_url = process.env.BASE_URL

    const response = await fetch(`${base_url}/tasksList`)
    const { tasks } = await response.json()

    return (
        
        <div>
            
            {tasks.map((item: { id: string }) =>
            
            <div key={item.id}>
                
   <Link href={`/tasksId/${item.id}`}>
                        <span>{item.id}</span></Link>
          
                            
           
                </div>

            )}
        
        </div>

    )

}

export default TasksPage
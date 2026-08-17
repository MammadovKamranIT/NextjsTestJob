import { notFound } from "next/navigation";

export default async function DemoItemPage({ params }: { params: Promise<{ id: string }> }) {
    
    const { id } = await params;

    const base_url = process.env.BASE_URL 
    const response = await fetch(`${base_url}/tasksList`)
    const { tasks } = await response.json()

const item = tasks.find(item => item.id === id)


    return (
   
        
        <div>
            
          
            id: {item.id}, title: {item.title}, status: {item.status}, creationtime: {item.creationtime}
          
    
        </div>
    
    )

}
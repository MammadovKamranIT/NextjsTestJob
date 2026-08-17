import { NextRequest, NextResponse } from "next/server";

interface Task {
    id: string, title: string, status: string, creationtime: string
}

export let tasks: Task[] = [
    { id: '1', title: 'Превая заметка', status: 'done', creationtime: String(Date.now()) },
    { id: '2', title: 'вторая заметка', status: 'remained', creationtime: String(Date.now()) }
]

export function deleteTask(id: string) {
    tasks = tasks.filter(item => item.id !== id)
}

export function updateTask(id: string, title: string) {
    const task: Task | undefined = tasks.find(item => item.id === id)
    if (!task) {
        return NextResponse.json({ error: 'Заметка не найдена' }, { status: 404 })
    }
    task.title = title
    
    return NextResponse.json(task)

}
export async function GET() {
    // console.log(tasks)
    return NextResponse.json({ tasks })
}

export async function POST(request: NextRequest) {
    const body = await request.json()
         console.log('body', body)
         let id = String(Math.floor(Math.random()*100))
         while(tasks.find(item => item.id === id)){ id = String(Math.floor(Math.random()*10))}
    const newTask = { id: id, title: body.title, status: body.status, creationtime: String(Date.now()) }
     console.log('newTask',newTask)
    tasks.push(newTask)
    return NextResponse.json(newTask, { status: 201 })
}


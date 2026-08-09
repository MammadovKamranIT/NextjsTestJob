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

export function updateTask(id: string, text: string) {
    const task: Task | undefined = tasks.find(item => item.id === id)
    if (!task) {
        return NextResponse.json({ error: 'Заметка не найдена' }, { status: 404 })
    }
    task.title = text
    
    return NextResponse.json(task)

}
export async function GET() {
    // console.log(tasks)
    return NextResponse.json({ tasks })
}

export async function POST(request: NextRequest) {
    const body = await request.json()
    const newTask = { id: String(Date.now()), title: body.title, status: body.status, creationtime: body.creationtime }
    tasks.push(newTask)
    return NextResponse.json(newTask, { status: 201 })
}


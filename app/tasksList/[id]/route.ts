import { NextRequest, NextResponse } from "next/server"
import { deleteTask, tasks, updateTask } from "../route"

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {

    const { id } = await params
    await deleteTask(id)

    return NextResponse.json({ deleted: id })
}

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const body = await request.json()
    await updateTask(id, body.title)
    return NextResponse.json({ edit: id })
}
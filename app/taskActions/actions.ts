'use server'

import { revalidatePath } from 'next/cache'

export async function addTask(formData: FormData) {
    const title = String(formData.get('text') ?? '').trim()
    const status = String(formData.get('status') ?? '').trim()
    if (!title) {
        return
    }
    try {
        await fetch(`${process.env.BASE_URL}/tasksList`, {
            method: 'POST',
            body: JSON.stringify({ title, status })
        })
        console.log('try')
    } catch (err) {
        console.log(err)
    } finally {
        revalidatePath('/taskActions')
    }
}

export async function deleteTask(id: string,) {
    try {
        await fetch(`${process.env.BASE_URL}/tasksList/${id}`, {
            method: 'DELETE',
        })
    } catch (err) {
        console.log(err)
    } finally {
        revalidatePath('/taskActions')
    }
}
export async function updateTask(id: string, formData: FormData) {
    const title = String(formData.get('text') ?? '').trim()
    try {
        await fetch(`${process.env.BASE_URL}/tasksList/${id}`, {
            method: 'put',
            body: JSON.stringify({ title })
        })
    } catch (err) {
        console.log(err)
    } finally {
        revalidatePath('/taskActions')
    }
}
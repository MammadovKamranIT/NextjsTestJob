'use server'

import { revalidatePath } from 'next/cache'

export async function addTask(formData: FormData) {
    const text = String(formData.get('text') ?? '').trim()
    if (!text) {
        return
    }
    try {
        await fetch(`${process.env.BASE_URL}/apitasks/`, {
            method: 'POST',
            body: JSON.stringify({ text })
        })
        console.log('try')
    } catch (err) {
        console.log(err)
    } finally {
        revalidatePath('/apitasks')
    }
}

export async function deleteTask(id: string,) {
    try {
        await fetch(`${process.env.BASE_URL}/apitasks/${id}`, {
            method: 'DELETE',
        })
    } catch (err) {
        console.log(err)
    } finally {
        revalidatePath('/apitasks')
    }
}
export async function updateTask(id: string, formData: FormData) {
    const text = String(formData.get('text') ?? '').trim()
    try {
        await fetch(`${process.env.BASE_URL}/apitasks/${id}`, {
            method: 'put',
            body: JSON.stringify({ text })
        })
    } catch (err) {
        console.log(err)
    } finally {
        revalidatePath('/apitasks')
    }
}
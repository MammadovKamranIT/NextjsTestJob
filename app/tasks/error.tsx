'use client'

export default function ErrorPage({ error, reset }: { error: Error, reset: () => void }) {
    return (<div>
        <p>Что-то пошло не так: {error.message}</p>
        <button onClick={reset}>Попробовать снова</button>
    </div>)
}
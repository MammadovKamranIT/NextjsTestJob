import Link from "next/link"

async function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

export default async function DemoRouterPage() {
    console.log('render DemoRouterPage')
    await delay(2000)

    return <>

        <h1>Демо-раздел роутинг</h1>
        
        <Link href={'/demo-router/1'}>
            <div> Cras fringilla pretium tellus, nec porttitor urna mattis eu</div>
        </Link>
        
        <Link href={'/demo-router/2'}>
            Cras fringilla pretium tellus, nec porttitor urna mattis eu
        </Link>
        
        <Link href={'/demo-router/3'}>
            Cras fringilla pretium tellus, nec porttitor urna mattis eu.
        </Link>

    </>

    
}
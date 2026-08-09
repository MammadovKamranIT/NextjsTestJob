import Link from "next/link"

export default function DemoLayout({ children }: { children: React.ReactNode }) {
    console.log('render DemoLayout')
    return (
        <div>
            {/* <nav>
                <Link href={'/demo-router/about'}>Перейти на страницу About</Link>
                <Link href={'/demo-router'}>Перейти на страницу Demo</Link>
            </nav> */}
            {children}
        </div>
    )
}
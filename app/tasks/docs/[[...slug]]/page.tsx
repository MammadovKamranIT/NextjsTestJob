const Page = async (props: PageProps<'/demo-router/docs/[[...slug]]'>) => {
    const { slug } = await props.params
    console.log(slug)
    return (
        <div>Docs</div>
    )
}

export default Page
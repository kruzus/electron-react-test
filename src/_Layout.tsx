interface Props {
    children: React.ReactNode;
}

export function Layout(props: Props) {
    return(
        <>
        {props.children}
        </>
    )
}
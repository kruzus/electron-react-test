import {Navbar } from "./components/Nav/Navbar";

interface Props {
    children: React.ReactNode;
}

export function Layout(props: Props) {
    return(
        <>
         {/*menu below..*/}
        <Navbar />

        {/*content below..*/}
        {props.children}
        </>
    )
}
import { NavbarMenu } from "./components/Nav/Navbar";

interface Props {
  children: React.ReactNode;
}

export function Layout(props: Props) {
  return (
    <>
      {/*menu below..*/}
      <NavbarMenu />

      {/*content below..*/}
      {props.children}
    </>
  );
}

import { createRoot } from "react-dom/client";
import { Counter } from "./components/Counter";
import { Layout } from "./_Layout";


createRoot(document.getElementById("root"))
  .render(
    <>
      <Layout>
        <Counter />
      </Layout>
    </>,
  );

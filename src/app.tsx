import ReactDOM from "react-dom";

import {Counter} from "./components/Counter"
import {Layout} from "./_Layout"

ReactDOM.render(
<>  
    <Layout>
            <Counter />
    </Layout>
</>,
document.getElementById('root'));
import { useState } from "react"


export function Counter() {
    const [count, setCount] = useState<number>(1);

    
    

    return (
        <>
            <h1>Counter: {count}</h1>
            <button onClick={() => { setCount(count + 90) }}>Click me to increase by 90!</button>
        </>
    )

}


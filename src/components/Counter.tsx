import { useState } from "react";
import "./counter.scss";

export function Counter() {
  const [count, setCount] = useState<number>(1);

  return (
    <>
      <div className="test">
        <h1>Counter: {count}</h1>
        <button
          onClick={() => {
            setCount(count + 90);
          }}
        >
          Click me to increase by 90!
        </button>
      </div>
    </>
  );
}

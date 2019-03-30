import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App({ initCount }) {
  const [count, setCount] = useState(initCount || 0);

  const increment = () => setCount(count + 1);

  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initCount);

  return (
    <div className="App">
      <h1>Bonjour!</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>RESET</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App initCount={5} />, rootElement);

import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App({ initCount }) {
  const [count, setCount] = useState(initCount || 0);
  const [text, setText] = useState("");

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initCount);
  const updateText = e => setText(e.target.value);

  return (
    <div className="App">
      <h1>Bonjour!</h1>
      <p>
        {text}: {count}
      </p>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>RESET</button>
      <input value={text} onChange={updateText} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App initCount={5} />, rootElement);

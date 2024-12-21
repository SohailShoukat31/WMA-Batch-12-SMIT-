import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Hello World !</h1>
      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Submit {count}
        </button>
      </div>
    </>
  );
}

export default App;

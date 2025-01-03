// import React from 'react'

// import React from "react";
import { useState } from "react";

function App() {
  const [data, setData] = useState("");
  const [text, setText] = useState("");

  function change(e) {
    console.log(e.target.value);
    setData(e.target.value);
  }
  function changeValue(event) {
    setText(data);
    // alert("Thanks ")
  }
  return (
    <div className="App">
      <p>Hello {text} </p> <br />
      <input onChange={change} />
      <br />
      <button onClick={changeValue}>Click </button>
    </div>
  );
}

export default App;

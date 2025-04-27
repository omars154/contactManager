import React, { useState } from "react";
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  function addNumbers () {
    setCount(count+1);
  }
  return (
    <div className="App">
      <p>The count rn is {count}</p>
      <button onClick={addNumbers}>add numbers</button>
    </div>
  );
}

export default App;

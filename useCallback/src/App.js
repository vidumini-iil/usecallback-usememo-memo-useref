import React, { useState, useCallback } from "react";
import Child from "./components/Child";
import "./App.css";

function App() {
  const [localNumber, setLocalNumber] = useState(0);
  const [childNumber, setChildNumber] = useState(0);

  const memorizedCallBack = useCallback(number => changeChildNumber(number), []);

  const increment = () => {
    setLocalNumber((prev) => prev + 1);
  };

  const changeChildNumber = (parentNumber) => {
    setChildNumber(parentNumber);
  }

  return (
    <div className="App">
      <Child number={childNumber} changeNumberParent={memorizedCallBack}/>
      <button onClick={increment}>Click to increment local</button>
      <h1>local: {localNumber}</h1>
    </div>
  );
}

export default App;


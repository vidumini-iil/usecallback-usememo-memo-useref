import React, { useState, useCallback } from "react";
import Child from "./components/Child";
import "./App.css";

const arr = [1, 2, 3, 4, 5, 10, 20, 30, 40, 50];

function App() {
  const [localNumber, setLocalNumber] = useState(0);
  const [childNumber, setChildNumber] = useState(0);

  const memorizedCallBack = useCallback(
    (number) => changeChildNumber(number),
    []
  );

  const increment = () => {
    setLocalNumber((prev) => prev + 1);
  };

  const changeChildNumber = (parentNumber) => {
    setChildNumber(parentNumber);
  };

  const getLargeValue = () => {
    console.log("Max array working");
    return Math.max(...arr);
  };

  return (
    <div className="App">
      <Child number={childNumber} changeNumberParent={memorizedCallBack} />
      <button onClick={increment}>Click to increment local</button>
      <h1>local: {localNumber}</h1>
      <h2>Large number: {getLargeValue()}</h2>
    </div>
  );
}

export default App;

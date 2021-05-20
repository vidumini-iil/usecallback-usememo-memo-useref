import React, { useState, useCallback, useMemo } from "react";
import Child from "./components/Child";
import "./App.css";

function App() {
  const [localNumber, setLocalNumber] = useState(0);
  const [childNumber, setChildNumber] = useState(0);

  const [arr, setArray] = useState([1, 2, 3, 4, 5, 10, 20, 30, 40, 50]);

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

  const memorizedVale = useMemo(() => getLargeValue(), [arr]);

  const incrementArray = () => {
    setArray([10, 18, 19]);
  };

  return (
    <div className="App">
      <Child number={childNumber} changeNumberParent={memorizedCallBack} />
      <button onClick={increment}>Click to increment local</button>
      <h1>local: {localNumber}</h1>
      <h2>Large number: {memorizedVale}</h2>
      <button onClick={incrementArray}>Click to increment local</button>
    </div>
  );
}

export default App;

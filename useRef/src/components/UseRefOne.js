import React, { useRef, useEffect } from "react";

const UseRefOne = () => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h1>Input Ref</h1>
      <input ref={inputRef} type="text" placeholder="Enter your name" />
    </div>
  );
};

export default UseRefOne;

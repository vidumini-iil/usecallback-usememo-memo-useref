import React, {memo} from "react";

const Child = (props) => {
  const changeNumber = () => {
    props.changeNumberParent(Math.random());
  };

  console.log("here");

  return (
    <div>
      <h1>Child: {props.number}</h1>
      <button onClick={changeNumber}>Click to change the child number</button>
    </div>
  );
};

export default memo(Child);
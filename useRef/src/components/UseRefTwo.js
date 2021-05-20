import React, { useRef, useEffect } from "react";
import moment from "moment";

const UseRefTwo = () => {
  const time = useRef(Date.now());

  useEffect(() => {
    
    setInterval(()=>{
        if(moment().diff(time.current, "minutes") > 1){
            alert("You have been here more than a miniute.");
            console.log("Working");
        }
    }, 1000 * 60);
  }, []);

  return (
    <div>
      <h1>Time Ref</h1>   
    </div>
  );
};

export default UseRefTwo;

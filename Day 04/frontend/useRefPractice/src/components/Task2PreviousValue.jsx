import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

const Task2PreviousValue = () => {
  const [count, setCount] = useState(0);
  const previousCount = useRef(null);

  useEffect(() => {
    previousCount.current = count;
  });

  return (
    <div>
      <h2>Current Count: {count} </h2>
      <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>
      <h1>Previous Count :{previousCount.current} </h1>
    </div>
  );
};

export default Task2PreviousValue;

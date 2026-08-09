import React, { useRef, useState } from "react";

const Task3PersistentValue = () => {
  const [renderCount, setRenderCount] = useState(0);
  const refValue = useRef(0);

  const increaseRef = () => {
    refValue.current += 1;
    console.log("Ref value:", refValue.current);
  };

  const forceRender = () => {
    setRenderCount((prev) => {
      return prev + 1;
    });
  };

  return (
    <div>
      <h2>{renderCount}</h2>
      <h1>{refValue.current}</h1>
      <button onClick={increaseRef}>Increase Ref</button>
      <button onClick={forceRender}>Force Render</button>
    </div>
  );
};

export default Task3PersistentValue;

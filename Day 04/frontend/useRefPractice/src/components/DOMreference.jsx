import React from "react";
import { useRef } from "react";

const DOMreference = () => {
  const inputRef = useRef();

  const btnClicked = () => {
    console.log(inputRef.current);
    inputRef.current.focus();
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={btnClicked}>Click Here</button>
    </div>
  );
};

export default DOMreference;

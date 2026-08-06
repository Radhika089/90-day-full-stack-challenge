import React, { useState } from "react";

const LiveInput = () => {
  const [input, setInput] = useState("");

  const changeInput = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };

  return (
    <div className="text-center mt-10">
      <input
        type="text"
        placeholder="Enter Name"
        value={input}
        onChange={changeInput}
        className="w-72 p-3 rounded-xl m-6 border border-gray-400 outline-none"
      />

      <h1 className="text-2xl mt-5">Hi,{input} </h1>
    </div>
  );
};

export default LiveInput;

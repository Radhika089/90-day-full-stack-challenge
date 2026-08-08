import React, { useEffect, useState } from "react";

const Task1EffectRuns = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("Effect 1");
  });

  useEffect(() => {
    console.log("Effect 2");
  }, []);

  useEffect(() => {
    console.log("Effect 3");
  }, [count, name]);

  return (
    <div className="min-h-screen flex justify-center items-center bg-black">
      <div className="max-w-md rounded-xl bg-white p-10 text-center">
        <h1 className="text-3xl">{count}</h1>
        <button
          onClick={() => setCount(count + 1)}
          className="bg-black text-white w-full p-3 rounded-2xl mt-4">
          Increase
        </button>
        <h1 className="text-3xl mt-3">{name}</h1>
        <input
          type="text"
          placeholder="Enter name"
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-gray-400 rounded-xl outline-none p-3 mt-3"
        />
      </div>
    </div>
  );
};

export default Task1EffectRuns;

import React from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  let incr = () => {
    setCount(count + 1);
  };
  let decr = () => {
    if (count <= 0) return 0;
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="w-96 mx-auto m-5">
      <div className="rounded-2xl p-10 text-center">
        <h1 className="text-3xl mb-2 font-semibold">Counter</h1>
        <h3 className="text-2xl">{count}</h3>
        <div className="flex">
          <button
            className="py-2 px-3 bg-black text-white cursor-pointer rounded-xl m-3"
            onClick={() => incr(count)}>
            Increase
          </button>
          <button
            onClick={decr}
            className="py-2 px-3 border border-gray-400 hover:bg-dark-200 cursor-pointer rounded-xl m-3">
            Decrease
          </button>
          <button
            onClick={reset}
            className="py-2 px-3 bg-black text-white cursor-pointer rounded-xl m-3">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;

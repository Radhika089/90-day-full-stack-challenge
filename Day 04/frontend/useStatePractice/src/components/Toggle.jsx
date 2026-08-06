import React, { useState } from "react";

const Toggle = () => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => setToggle((prev) => !prev);

  return (
    <div className="mx-auto w-96 mt-10">
      <h1 className="text-2xl">{toggle ? "Hii, you can toggle me" : ""}</h1>

      <button
        className="py-3 border w-48 border-gray-400 bg-white mt-9 hover:bg-black hover:text-white transition duration-200 rounded-xl m-3"
        onClick={handleToggle}>
        {toggle ? "Hide Message" : "Show Message"}
      </button>
    </div>
  );
};

export default Toggle;

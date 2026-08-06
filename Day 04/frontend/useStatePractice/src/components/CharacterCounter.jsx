import React, { useState } from "react";

const CharacterCounter = () => {
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="mx-auto mt-12 w-full max-w-md rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-gray-900">Character Counter</h2>

      <p className="mt-1 text-sm text-gray-500">Type your message below.</p>

      <textarea
        rows={5}
        value={input}
        onChange={handleInput}
        maxLength={100}
        placeholder="Start typing..."
        className="mt-5 w-full resize-none rounded-xl border border-gray-300 p-4 outline-none transition focus:border-[#29b354]"
      />

      <div className="mt-4 flex items-center justify-between">
        <p className="text-gray-700">
          {input || (
            <span className="italic text-gray-400">Start typing...</span>
          )}
        </p>

        <span
          className={`rounded-full px-3 py-1 text-sm font-medium ${
            input.length > 90
              ? "bg-red-100 text-red-600"
              : input.length > 70
                ? "bg-yellow-100 text-yellow-700"
                : "bg-green-100 text-green-700"
          }`}>
          {input.length}/100
        </span>
      </div>
    </div>
  );
};

export default CharacterCounter;

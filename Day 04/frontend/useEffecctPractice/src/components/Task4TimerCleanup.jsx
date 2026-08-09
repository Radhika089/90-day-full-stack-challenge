import React, { useEffect, useState } from "react";

const Task4TimerCleanup = () => {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [running]);

  return (
    <div>
      {" "}
      <div>
        <h1>Seconds: {seconds}</h1>

        <button onClick={() => setRunning(true)}>Start</button>
        <button onClick={() => setRunning(false)}>Stop</button>
        <button onClick={() => setSeconds(0)}>Reset</button>
      </div>
    </div>
  );
};

export default Task4TimerCleanup;

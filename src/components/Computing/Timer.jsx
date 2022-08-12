import React, { useState, useEffect } from "react";
import Conversion from "./Conversion";

const Timer = ({ cookTime }) => {
  console.log(cookTime);
  const [time, setTime] = useState(cookTime);
  const [running, setRunning] = useState(false);
  useEffect(() => {
    let i;
    if (running) {
      i = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    } else if (!running) {
      clearInterval(i);
    }
    return () => clearInterval(i);
  }, [running]);

  return (
    <div className="stopwatch">
      <div className="numbers">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-1)}:</span>

        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div className="buttons">
        <button onClick={() => setRunning(true)}>Start</button>
        <button onClick={() => setRunning(false)}>Stop</button>
        <button onClick={() => setTime(0)}>Reset</button>
      </div>
      <div>
        <Conversion cookTime={cookTime} />
        <a href="./app">Restart</a>
      </div>
    </div>
  );
};
export default Timer;

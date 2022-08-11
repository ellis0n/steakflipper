import React, { useState, useEffect } from "react";
import Conversion from "./Conversion";

const Timer = ({ cookTime }) => {
  console.log(cookTime);

  const convertTime = (cookTime) => {
    const minutes = Math.floor((cookTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((cookTime % (1000 * 60)) / 1000);
    console.log(minutes, seconds);
    return [minutes, seconds];
  };

  const useCountdown = (cookTime) => {
    const countDownDate = new Date(cookTime).getTime();
    const [countDown, setCountDown] = useState("");

    useEffect(() => {
      const interval = setInterval(() => {
        setCountDown(countDownDate - new Date().getTime());
      }, 1000);

      return () => clearInterval(interval);
    }, [countDownDate]);

    return convertTime(countDown);
  };

  const ShowCounter = (minutes, seconds) => {
    return (
      <div className="show-counter">
        <TimerDisplay value={minutes} type={"Mins"} />
        <p>:</p>
        <TimerDisplay value={seconds} type={"Seconds"} />
      </div>
    );
  };

  const CountdownTimer = (cookTime) => {
    const [minutes, seconds] = useCountdown(cookTime);

    if (minutes + seconds <= 0) {
      return <div>FLIP</div>;
    } else {
      return <ShowCounter minutes={minutes} seconds={seconds} />;
    }
  };
  const TimerDisplay = ({ value, type, isDanger }) => {
    return (
      <div className={isDanger ? "countdown danger" : "countdown"}>
        <p>{value}</p>
        <span>{type}</span>
      </div>
    );
  };
  return (
    <div>
      {cookTime}
      <Conversion cookTime={cookTime} />
      <a href="./app">Restart</a>
    </div>
  );
};

export default Timer;

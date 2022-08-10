import React from "react";
import TimerDisplay from "./TimerDisplay";
import { useEffect, useState } from "react";

const convertTime = (timeInMS) => {
  const minutes = Math.floor((timeInMS % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeInMS % (1000 * 60)) / 1000);

  return [minutes, seconds];
};

const useCountdown = (rarity) => {
  const countDownDate = new Date(rarity).getTime();
  const [countDown, setCountDown] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return convertTime(countDown);
};

const ShowCounter = ({ minutes, seconds }) => {
  return (
    <div className="show-counter">
      <TimerDisplay value={minutes} type={"Mins"} />
      <p>:</p>
      <TimerDisplay value={seconds} type={"Seconds"} />
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [minutes, seconds] = useCountdown(targetDate);

  if (minutes + seconds <= 0) {
    return <div>FLIP</div>;
  } else {
    return <ShowCounter minutes={minutes} seconds={seconds} />;
  }
};

export default CountdownTimer;

import React, { useState, useEffect } from "react";

const Test = (props) => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [countDown, setCountDown] = useState("");

  const countDownDate = (rarity) => {
    new Date(rarity).getTime();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate(rarity));
    });
  });

  return <div>Test</div>;
};

export default Test;

import React from "react";

const Conversion = (props) => {
  let userTime = 0;
  const convertTime = (time) => {
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    return minutes;
  };
  userTime = convertTime(props.cookTime);

  return <div>{userTime}:00 Minutes Per Side</div>;
};

export default Conversion;

import React from "react";

const Rarity = (timeinMS) => {
  const convertTime = (minMS, secMS) => {
    const minutes = Math.floor((minMS % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((secMS % (1000 * 60)) / 1000);

    return <div>minutes seconds </div>;
  };
  convertTime(98000, 19999);
  return;
};

export default Rarity;

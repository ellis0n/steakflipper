import React from "react";

const RaritySelect = () => {
  let cookSetting = "";
  let cookTime = 0;
  const handleRarity = (e) => {
    cookSetting = e.target.value;
    if (cookSetting === "rare") {
      cookTime = 90000;
    } else if (cookSetting === "medium-rare") {
      cookTime = 120000;
    } else if (cookSetting === "medium") {
      cookTime = 180000;
    } else if (cookSetting === "medium-well") {
      cookTime = 240000;
    } else if (cookSetting === "well") {
      cookTime = 300000;
    }
    console.log(cookTime);
    return cookTime;
  };

  return (
    <div className="userSelect">
      <button onClick={handleRarity} value="rare">
        Rare
      </button>
      <button onClick={handleRarity} value="medium-rare">
        Medium-Rare
      </button>
      <button onClick={handleRarity} value="medium">
        Medium
      </button>
      <button onClick={handleRarity} value="medium-well">
        Medium-Well
      </button>
      <button onClick={handleRarity} value="well">
        Well Done
      </button>
    </div>
  );
};

export default RaritySelect;

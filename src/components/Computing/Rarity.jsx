import React, { useState } from "react";
import Conversion from "./Conversion";
import Timer from "./Timer";

// Assigns the timer length in milliseconds based on user input
const RaritySelect = (props) => {
  let cookSetting = "";
  const [cookTime, setCookTime] = useState(null);
  const [showMenu, setShowMenu] = useState("flex");

  const handleRarity = (e) => {
    cookSetting = e.target.value;
    if (cookSetting === "rare") {
      setCookTime(90000);
    } else if (cookSetting === "medium-rare") {
      setCookTime(120000);
    } else if (cookSetting === "medium") {
      setCookTime(180000);
    } else if (cookSetting === "medium-well") {
      setCookTime(240000);
    } else if (cookSetting === "well") {
      setCookTime(300000);
    }
    setShowMenu("none");
  };
  // return cookTime;

  return (
    <div>
      <div className="userSelect" style={{ display: showMenu }}>
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
      <Timer cookTime={cookTime} />
    </div>
  );
};

export default RaritySelect;

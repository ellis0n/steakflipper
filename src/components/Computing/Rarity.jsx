import React, { useState } from "react";
import Countdown from "./Countdown";

// Assigns the timer length in milliseconds based on user input
const Rarity = (props) => {
  let cookSetting = "";
  const [cookTime, setCookTime] = useState(null);
  const [showMenu, setShowMenu] = useState("flex");

  const handleRarity = (e) => {
    cookSetting = e.target.value;
    if (cookSetting === "rare") {
      setCookTime(10);
    } else if (cookSetting === "medium-rare") {
      setCookTime(120);
    } else if (cookSetting === "medium") {
      setCookTime(180);
    } else if (cookSetting === "medium-well") {
      setCookTime(240);
    } else if (cookSetting === "well") {
      setCookTime(300);
    }
    setShowMenu("none");
    return cookTime;
  };

  return (
    <div>
      {cookTime ? (
        <Countdown cookTime={cookTime} setIndex={props.setIndex} />
      ) : (
        <span> How do you like your steak...</span>
      )}
      {cookTime ? (
        <Countdown cookTime={cookTime} setIndex={props.setIndex} />
      ) : (
        <span> How do you like your steak...</span>
      )}
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
    </div>
  );
};

export default Rarity;

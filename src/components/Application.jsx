import React, { useState } from "react";
import Countdown from "./Countdown";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";
const Application = () => {
  const [cookTime, setCookTime] = useState(null);
  const [showMenu, setShowMenu] = useState("flex");

  // Assign timer length based on button clicked
  const handleRarity = (e) => {
    let cookSetting = "";
    cookSetting = e.target.value;
    if (cookSetting === "rare") {
      setCookTime(60);
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
      <Header />
      <Navbar name="appNav" />
      {/* Display countdown only if user makes input */}
      {cookTime ? (
        <Countdown cookTime={cookTime} />
      ) : (
        <div className>
          <h2 className="prompt"> How do you like your steak?</h2>
        </div>
      )}
      {/* Note: future iteration will turn button into component */}
      <div className="userSelect" style={{ display: showMenu }}>
        <button
          className="raritySelect rare"
          onClick={handleRarity}
          value="rare"
        >
          Rare
        </button>
        <button
          className="raritySelect medium-rare"
          onClick={handleRarity}
          value="medium-rare"
        >
          Medium-Rare
        </button>
        <button
          className="raritySelect medium"
          onClick={handleRarity}
          value="medium"
        >
          Medium
        </button>
        <button
          className="raritySelect medium-well"
          onClick={handleRarity}
          value="medium-well"
        >
          Medium-Well
        </button>
        <button
          className="raritySelect well"
          onClick={handleRarity}
          value="well"
        >
          Well Done
        </button>
      </div>
      <Footer />
    </div>
  );
};
export default Application;

import React, { useState } from "react";
import RaritySelect from "./RaritySelect";
import Timer from "../Computing/Timer";

const Home = ({ cookSetting }) => {
  const [rotateSteak, setRotateSteak] = useState("");
  const rotate = rotateSteak ? "rotate(360deg)" : "rotate(0deg)";
  const handleRotate = () => setRotateSteak(!rotateSteak);
  const showMenu = rotateSteak ? "flex" : "none";

  return (
    <div className="App-header">
      <input
        onClick={handleRotate}
        alt="steak"
        className="logo"
        type="image"
        src="https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/be1c9dec48d944a.png"
        style={{ transform: rotate, transition: "all .8s linear" }}
      />
      <div className="enter_btn" style={{ display: showMenu }}>
        <RaritySelect />
        <Timer rarity={cookSetting} />
      </div>
      <h1 className="App">Steakflipper</h1>
    </div>
  );
};

export default Home;

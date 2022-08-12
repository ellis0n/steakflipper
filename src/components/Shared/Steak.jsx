import React, { useState } from "react";
import Info from "../Main/Info";
import { showMenu } from "../Computing/Rarity";

const Steak = () => {
  const [rotateSteak, setRotateSteak] = useState("");
  const [showInfo, setShowInfo] = useState("none");
  const rotate = rotateSteak ? "rotate(360deg)" : "rotate(0deg)";
  const handleRotate = () => {
    setRotateSteak(!rotateSteak);
    rotateSteak ? setShowInfo("none") : setShowInfo("flex");
  };

  return (
    <div className="App">
      <input
        onClick={handleRotate}
        alt="steak"
        className="logo"
        type="image"
        src="https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/be1c9dec48d944a.png"
        style={{ transform: rotate, transition: "all .8s linear" }}
      />
      <Info showInfo={showInfo} />
    </div>
  );
};

export default Steak;

import React, { useState } from "react";
const Steak = ({ className }) => {
  const [rotateSteak, setRotateSteak] = useState(true);
  const rotate = rotateSteak ? "rotate(360deg)" : "rotate(0deg)";
  const handleRotate = () => {
    setRotateSteak(!rotateSteak);
  };

  return (
    <div className="steakWrapper">
      <input
        onClick={handleRotate}
        alt="steak"
        className={className}
        type="image"
        src="https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/be1c9dec48d944a.png"
        style={{ transform: rotate, transition: "all .8s linear" }}
      />
    </div>
  );
};

export default Steak;

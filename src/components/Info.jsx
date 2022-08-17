import React from "react";

const Info = ({ showInfo }) => {
  return (
    <div className="popup" style={{ display: showInfo }}>
      <h2>How to Use:</h2>
      <div className="infoText">
        <ul>
          <li>Click "App"</li>
          <li>Select desired Rarity</li>
          <li>Place steak on cooking surface and click start</li>
          <li>Flip steak when timer elapses</li>
          <li>Click Flip button to reset timer</li>
        </ul>
      </div>
    </div>
  );
};

export default Info;

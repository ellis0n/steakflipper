import React from "react";

const Info = ({ showInfo }) => {
  return (
    <div className="card">
      <div className="cardTemplate front">
        <h2>New to Steakflipper?</h2>
        <ul>
          <li>1. Click timer button</li>
          <li>2. Select preference</li>
          <li>3. Place steak on grill</li>
          <li>4. Flip steak on prompt</li>
          <li>5. Press Flip button</li>
          <li>6. Remove when finished</li>
        </ul>
      </div>
      <div className="cardTemplate back">
        <h2>STEAK TIPS:</h2>
        <ul>
          <li>Salt and pepper's all you need.</li>
          <li>Flip once: its the rule.</li>
          <li>Room-temp the steak!</li>
          <li>Wait 5 mins before cutting</li>
          <li>Flip with tongs!</li>
          <li>Timer based on 1" sirloin cut.</li>
        </ul>
      </div>
    </div>
  );
};

export default Info;

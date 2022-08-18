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
          <li>6. Remove from grill when Finished</li>
          <li>7. Press Reset to Cook Another</li>
        </ul>
      </div>
      <div className="cardTemplate back">
        <h2>STEAK TIPS:</h2>
        <ul>
          <li>Salt and pepper's all you need.</li>
          <li>Flip once: its the rule.</li>
          <li>Always get the steak to room temp first.</li>
          <li>Let steak sit for five minutes after cooking.</li>
          <li>Always flip with tongs!</li>
          <li>Steakflipper assumes a 1" sirloin cut.</li>
        </ul>
      </div>
    </div>
  );
};

export default Info;

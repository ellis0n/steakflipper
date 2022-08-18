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
          <li>Let steak reach room temperature before cooking.</li>
          <li>Wait 5 mins before cutting. Save the juices!</li>
          <li>Flip with tongs or spatula!</li>
          <li>Steakflipper timer is based on 1" sirloin cut.</li>
        </ul>
      </div>
    </div>
  );
};

export default Info;

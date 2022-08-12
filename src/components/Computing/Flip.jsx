import React from "react";

const Flip = (props) => {
  return (
    <div>
      <button onClick={handleFlip} value="flipped">
        Flip!!
      </button>
    </div>
  );
};

export default Flip;

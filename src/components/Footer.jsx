import React from "react";

const ticker = [
  "Web app by Glen May",
  "Glen Made This",
  "Hey, you! This is Glen's Project",
  "BREAKING: Glen made this!",
  "Glen May-de this",
  "Glen's Little Timer Thing",
  "Glen Loves Steak",
];
const tickerRandom = ticker[Math.floor(Math.random() * ticker.length)];
const Footer = () => {
  return (
    <div className="footer">
      <footer>{tickerRandom}</footer>
    </div>
  );
};

export default Footer;

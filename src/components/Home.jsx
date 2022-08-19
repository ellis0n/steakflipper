import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Steak from "./Steak";

const Home = () => {
  // Cycles through slogans used in pop-up on initial load to homescreen
  const slogan = [
    "Flip your steak on time, every time!",
    "The Best A Steak Can Get",
    "Flip-flip-flipadelphia!",
    "Steak is Flip is Steak",
    "Its flipping steak!",
    "Forget sloppy steaks!",
    "Its a timer app!",
  ];
  const sloganRandom = slogan[Math.floor(Math.random() * slogan.length)];
  return (
    <div>
      <Header />
      <Navbar name="homeNav" />
      <div className="wrapper">
        <h2 className="animateSlogan">{sloganRandom}</h2>
      </div>
      <Steak className="steak" />
    </div>
  );
};

export default Home;

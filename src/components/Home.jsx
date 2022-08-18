import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Steak from "./Steak";

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar name="homeNav" />
      <Steak />
    </div>
  );
};

export default Home;

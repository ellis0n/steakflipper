import React from "react";
import Steak from "./Steak";
import Navbar from "./Navbar";
import Header from "./Header";
import Info from "./Info";
import Footer from "./Footer";

const About = () => {
  return (
    <div>
      <Header />
      <Navbar name="aboutNav" />
      <Steak />
      <Info />
      <Footer />
    </div>
  );
};

export default About;

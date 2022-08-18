import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Info from "./Info";
import Footer from "./Footer";
import Steak from "./Steak";

const About = () => {
  return (
    <div>
      <Header />
      <Navbar name="aboutNav" />
      <Info />
      <Footer />
    </div>
  );
};

export default About;

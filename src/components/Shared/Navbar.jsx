import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/app">
          App
        </Link>
        <Link className="navLink" to="/about">
          About
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;

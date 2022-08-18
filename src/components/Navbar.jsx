import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ name }) => {
  console.log(name);
  return (
    <div>
      <nav>
        <div className={name}>
          {name === "homeNav" ? null : (
            <Link className="navLink" to="/">
              Home
            </Link>
          )}
          {name === "appNav" ? null : (
            <Link className="navLink" to="/app">
              Timer
            </Link>
          )}
          {name === "aboutNav" ? null : (
            <Link className="navLink" to="/about">
              About
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

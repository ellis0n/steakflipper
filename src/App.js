import React from "react";
import Home from "./components/Home";
import Application from "./components/Application";
import About from "./components/About";
import Navbar from "./components/Navbar";
import "./App.css";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <h1 className="App-header">Steakflipper</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/app" element={<Application></Application>}></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

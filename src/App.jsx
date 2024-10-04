import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Themes from "./Components/Themes";
import Contact from "./pages/Contact/Contact";
import Project from "./pages/Projects/Project";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <Themes />
      <Routes>
        <Route index element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Projects" element={<Project />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;

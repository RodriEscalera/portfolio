import React from "react";
import NavBar from "@/components/Navbar/NavBar";
import Home from "@/sections/Home";
import AboutMe from "@/sections/AboutMe";
import Experience from "@/sections/Experience";
const Main = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <AboutMe />
      <Experience />
    </div>
  );
};

export default Main;

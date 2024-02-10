import React from "react";
import NavBar from "@/components/Navbar/NavBar";
import Home from "@/sections/Home";
import AboutMe from "@/sections/AboutMe";
import Experience from "@/sections/Experience";
const Main = () => {
  return (
    <div className="w-[100%] min-h-[100vh]">
      <NavBar />
      <Home />
      <AboutMe />
      <Experience />
    </div>
  );
};

export default Main;

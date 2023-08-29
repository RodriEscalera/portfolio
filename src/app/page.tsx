import React from "react";
import NavBar from "@/components/NavBar";
import Home from "@/sections/Home";

const Main = () => {
  return (
    <div className="main-background min-w-full h-[100vh]">
      <NavBar />
      <Home />
    </div>
  );
};

export default Main;

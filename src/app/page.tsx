"use client";
import React, { useEffect, useState } from "react";
import NavBar from "@/components/Navbar/NavBar";
import Home from "@/sections/Home";
import AboutMe from "@/sections/AboutMe";
import Experience from "@/sections/Experience";
import wait from "@/utils/wait";
import Loader from "@/components/Loader/Loader";

const Main = () => {
  const [isPageLoaded, setIsPageLoaded] = useState<boolean>(false);

  const ExecuteLoader = async (): Promise<void> => {
    wait(3000);
    setIsPageLoaded(true);
  };

  useEffect(() => {
    ExecuteLoader();
  }, []);

  return (
    <>
      {isPageLoaded ? (
        <div className="w-[100%] min-h-[100vh] main-page-container">
          <NavBar />
          <Home />
          <AboutMe />
          <Experience />
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Main;

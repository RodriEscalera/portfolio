"use client";
import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BiUser, BiBook } from "react-icons/bi";
// import { BsBriefcase } from "react-icons/bs";
import IconButton from "@/commons/IconButton/IconButton";
import { GoMail } from "react-icons/go";
import style from "./NavBar.module.css";

const NavBar = () => {
  type TselectionNavButtons = {
    home: boolean;
    "about-me": boolean;
    experience: boolean;
    projects: boolean;
    contact: boolean;
  };

  const [selectionNavButtons, setSelectionNavButtons] =
    useState<TselectionNavButtons>({
      home: true,
      "about-me": false,
      experience: false,
      projects: false,
      contact: false,
    });

  const onSelectNavButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    const name = e.currentTarget.name;

    const newSelection: Record<string, boolean> = {};
    for (const prop in selectionNavButtons) {
      newSelection[prop] = false;
    }
    newSelection[name] = true;
    setSelectionNavButtons(newSelection as TselectionNavButtons);
    const section = document.querySelector(`#${name}`);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`${style["nav"]} ${style["glass-effect"]}`}>
      <ul className={style["ul"]}>
        <li>
          <IconButton
            onClick={onSelectNavButton}
            name="home"
            isSelected={selectionNavButtons.home}
            icon={<AiOutlineHome />}
          />
        </li>
        <li>
          <IconButton
            onClick={onSelectNavButton}
            name="about-me"
            isSelected={selectionNavButtons["about-me"]}
            icon={<BiUser />}
          />
        </li>
        <li>
          <IconButton
            onClick={onSelectNavButton}
            name="experience"
            isSelected={selectionNavButtons.experience}
            icon={<BiBook />}
          />
        </li>
        {/* <li>
          <IconButton
            onClick={onSelectNavButton}
            name="projects"
            isSelected={selectionNavButtons.projects}
            icon={<BsBriefcase />}
          />
        </li> */}
        <li>
          <IconButton
            onClick={onSelectNavButton}
            name="contact"
            isSelected={selectionNavButtons.contact}
            icon={<GoMail />}
          />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

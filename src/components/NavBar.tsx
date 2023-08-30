"use client";
import React, { useState } from "react";
import "../styles/NavBar.css";
import { AiOutlineHome } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { BsBriefcase } from "react-icons/bs";

import IconButton from "@/commons/IconButton";
const NavBar = () => {
  type TselectionNavButtons = {
    home: boolean;
    me: boolean;
    experience: boolean;
  };

  const [selectionNavButtons, setSelectionNavButtons] =
    useState<TselectionNavButtons>({
      home: true,
      me: false,
      experience: false,
    });

  const onSelectNavButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    const name = e.currentTarget.name;

    const newSelection: Record<string, boolean> = {};
    for (const prop in selectionNavButtons) {
      newSelection[prop] = false;
    }
    newSelection[name] = true;

    setSelectionNavButtons(newSelection as TselectionNavButtons);
  };

  return (
    <nav className="flex text-white justify-center items-center fixed right-1/2 translate-x-2/4 bottom-10 w-[15rem] h-[4.3rem] glass-effect rounded-[3rem]">
      <ul className="flex gap-10">
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
            name="me"
            isSelected={selectionNavButtons.me}
            icon={<BiUser />}
          />
        </li>
        <li>
          <IconButton
            onClick={onSelectNavButton}
            name="experience"
            isSelected={selectionNavButtons.experience}
            icon={<BsBriefcase />}
          />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

"use client";
import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BiUser, BiBook } from "react-icons/bi";
import { BsBriefcase } from "react-icons/bs";
import IconButton from "@/commons/IconButton";
import { GoMail } from "react-icons/go";
import { useRouter } from "next/navigation";
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

  const router = useRouter();

  const onSelectNavButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    const name = e.currentTarget.name;

    const newSelection: Record<string, boolean> = {};
    for (const prop in selectionNavButtons) {
      newSelection[prop] = false;
    }
    newSelection[name] = true;

    setSelectionNavButtons(newSelection as TselectionNavButtons);
    router.push(`/#${name}`);
  };

  return (
    <nav
      className={`z-30 flex text-white justify-center items-center fixed right-1/2 translate-x-2/4 bottom-[2rem] w-[22rem] h-[4.3rem] rounded-[3rem] ${style["glass-effect"]}`}
    >
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
        <li>
          <IconButton
            onClick={onSelectNavButton}
            name="projects"
            isSelected={selectionNavButtons.projects}
            icon={<BsBriefcase />}
          />
        </li>
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

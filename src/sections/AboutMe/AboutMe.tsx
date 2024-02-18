"use client";
import Image from "next/image";
import React, { FC } from "react";
import { FaRegNewspaper } from "react-icons/fa";
import { VscFolderActive } from "react-icons/vsc";
import style from "./AboutMe.module.css";

const HeaderSection: FC = () => {
  return (
    <div className="text-center mt-[2rem]">
      <h2 className="text-4xl text-white">¿Quién soy?</h2>
      <h3 className="text-2xl text-darkGreen">Conoceme.</h3>
    </div>
  );
};

const SquaresContainer: FC = () => {
  return (
    <div className="flex max-[660px]:w-[85%] min-[660px]:w-[75%] justify-center gap-5 ">
      <div
        className={`w-[10rem] h-[10rem] ${style["xp-projects-square"]} max-[415px]:scale-[0.8] bg-darkGreen rounded-[1rem] flex flex-col justify-center items-center gap-5`}
      >
        <FaRegNewspaper className="w-[2rem] h-[2rem] text-white" />
        <div className="text-center text-white">
          <h3 className="text-2xl">Experiencia</h3>
          <p>+2 años</p>
        </div>
      </div>
      <div
        className={`w-[10rem] h-[10rem] max-[415px]:scale-[0.8] ${style["xp-projects-square"]} bg-darkGreen rounded-[1rem] flex flex-col justify-center items-center gap-5`}
      >
        <VscFolderActive className="w-[2rem] h-[2rem] text-white" />
        <div className="text-center text-white">
          <h3 className="text-2xl">Proyectos</h3>
          <p>+10 completados</p>
        </div>
      </div>
    </div>
  );
};

const ExperienceText: FC = () => {
  return (
    <div className={style["experience-text-container"]}>
      <p className="text-white">
        Soy un desarrollador Fullstack con 2 años de experiencia en IT,
        especializado en el diseño, desarrollo e implementación de aplicaciones
        web de alta calidad. Mi enfoque en la colaboración y la satisfacción del
        cliente me permite trabajar de la mano con otros profesionales para
        alcanzar los objetivos de la empresa. Actualmente, estoy inmerso en
        proyectos desafiantes que impulsan mi constante aprendizaje. ¡Espero
        poder contribuir a tu próximo proyecto!
      </p>
    </div>
  );
};

const PhotoArea: FC = () => {
  return (
    <div className={style["photo-area-container"]}>
      <div className={style["profile-picture-border"]}></div>
      <Image
        src="/images/me.jpg"
        width={2000}
        height={2000}
        alt="rodrigo escalera"
        className={style["profile-picture"]}
      />
    </div>
  );
};

const AboutMe: FC = () => {
  return (
    <section
      id="about-me"
      className="min-h-[100vh] max-w-full flex flex-col items-center justify-center relative"
    >
      <HeaderSection />
      <div className={style["content-container"]}>
        <PhotoArea />
        <div className={style["about-me-container"]}>
          <SquaresContainer />
          <ExperienceText />
        </div>
      </div>
      <hr className="isolator absolute bottom-0" />
    </section>
  );
};

export default AboutMe;

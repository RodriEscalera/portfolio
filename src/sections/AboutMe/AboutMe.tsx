"use client";
import Image from "next/image";
import React, { FC } from "react";
import style from "./AboutMe.module.css";
import { FaRegNewspaper } from "react-icons/fa";
import { VscFolderActive } from "react-icons/vsc";
import AboutCard from "@/commons/AboutCard/AboutCard";

const HeaderSection: FC = () => {
  return (
    <div className="text-center mt-[2rem]">
      <h2 className="text-4xl text-white font-bold">¿Quién soy?</h2>
      <h3 className="text-2xl text-darkGreen">Conoceme.</h3>
    </div>
  );
};

const Squares: FC = () => {
  return (
    <div className={style["squares-container"]}>
      <AboutCard
        subtitle="+2 años"
        title="Experiencia"
        icon={<FaRegNewspaper />}
      />
      <AboutCard
        subtitle="+10 completados"
        title="Proyectos"
        icon={<VscFolderActive />}
      />
    </div>
  );
};

const ExperienceText: FC = () => {
  return (
    <div className={style["experience-text-container"]}>
      <p>
        Soy un <span className="text-darkGreen">desarrollador Full Stack</span>{" "}
        con <span className="text-darkGreen">2 años de experiencia en IT</span>,
        especializado en el{" "}
        <span className="text-darkGreen">
          diseño, desarrollo e implementación de aplicaciones web de alta
          calidad
        </span>
        . Mi enfoque en la{" "}
        <span className="text-darkGreen">
          colaboración y la satisfacción del cliente
        </span>{" "}
        me permite trabajar de la mano con otros profesionales para alcanzar los
        objetivos de la empresa. Actualmente, estoy inmerso en proyectos
        desafiantes que impulsan mi{" "}
        <span className="text-darkGreen">constante aprendizaje</span>. ¡Espero
        poder{" "}
        <span className="text-darkGreen">contribuir a tu próximo proyecto</span>
        !
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
          <Squares />
          <ExperienceText />
        </div>
      </div>
      <hr className="isolator absolute bottom-0" />
    </section>
  );
};

export default AboutMe;

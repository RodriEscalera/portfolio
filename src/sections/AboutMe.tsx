"use client";
import Image from "next/image";
import React from "react";
import { FaRegNewspaper } from "react-icons/fa";
import { VscFolderActive } from "react-icons/vsc";
import "../styles/AboutMe.css";

const AboutMe = () => {
  return (
    <section
      id="about-me"
      className="h-[100vh] max-w-full flex flex-col items-center justify-center relative gap-5"
    >
      <div className="text-center">
        <h2 className="text-4xl">¿Quien soy?</h2>
        <h3 className="text-2xl text-indigo-300">Conoceme.</h3>
      </div>
      <div className="w-full h-[80vh] grid min-[660px]:grid-cols-2 max-[660px]:grid-cols-1 justify-center items-center ">
        <div className="w-full h-full flex justify-center items-center">
          <Image
            src="/images/me.jpg"
            width={2000}
            height={2000}
            alt="rodrigo escalera"
            className="rounded-[3rem] object-cover max-[660px]:h-[15rem] max-[660px]:w-[15rem] min-[660px]:h-[20rem] min-[660px]:w-[20rem] z-20 profile-picture-animate max-[415px]:scale-[1]"
          />
          <div className="rounded-[3rem] max-[660px]:h-[15rem] max-[660px]:w-[15rem] min-[660px]:h-[20rem] min-[660px]:w-[20rem] bg-darkGreen absolute z-10"></div>
        </div>
        <div className="w-full h-full flex flex-col max-[660px]:items-center min-[660px]:items-start justify-center gap-y-5">
          <div className="flex max-[660px]:w-[85%] min-[660px]:w-[75%] justify-center gap-5 ">
            <div className="w-[13rem] h-[10rem] xp-projects-square max-[415px]:scale-[0.8] bg-darkGreen rounded-[1rem] flex flex-col justify-center items-center gap-5">
              <FaRegNewspaper className="w-[2rem] h-[2rem]" />
              <div className="text-center">
                <h3 className="text-2xl">Experiencia</h3>
                <p>+1 años</p>
              </div>
            </div>
            <div className="w-[13rem] h-[10rem] max-[415px]:scale-[0.8] xp-projects-square bg-darkGreen rounded-[1rem] flex flex-col justify-center items-center gap-5">
              <VscFolderActive className="w-[2rem] h-[2rem]" />
              <div className="text-center">
                <h3 className="text-2xl">Proyectos</h3>
                <p>+10 completados</p>
              </div>
            </div>
          </div>
          <div className="w-full flex max-[660px]:justify-center max-[660px]:text-center">
            <p className="max-[660px]:w-[85%] min-[660px]:w-[75%] max-[360px]:scale-[0.9] max-[360px]:h-[20%] max-[360px]:w-[100%]">
              Soy un desarrollador Fullstack con 2 años de experiencia en IT,
              especializado en el diseño, desarrollo e implementación de
              aplicaciones web de alta calidad. Mi enfoque en la colaboración y
              la satisfacción del cliente me permite trabajar de la mano con
              otros profesionales para alcanzar los objetivos de la empresa.
              Actualmente, estoy inmerso en proyectos desafiantes que impulsan
              mi constante aprendizaje. ¡Espero poder contribuir a tu próximo
              proyecto!
            </p>
          </div>
        </div>
      </div>
      <hr className="isolator absolute bottom-0" />
    </section>
  );
};

export default AboutMe;

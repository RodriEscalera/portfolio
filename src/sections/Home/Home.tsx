"use client";
import React, { useMemo } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Button from "@/commons/Button/Button";
import style from "./Home.module.css";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";

interface ISocialMedia {
  link: string;
  icon: JSX.Element;
}

const Home = () => {
  const [text] = useTypewriter({
    words: ["Desarrollador Full Stack"],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 70,
  });

  const socialMedia = useMemo((): ISocialMedia[] => {
    return [
      {
        link: "https://github.com/RodriEscalera",
        icon: <FaGithub className={style["icon"]} />,
      },
      {
        link: "https://www.linkedin.com/in/rodrigo-escalera-a00a97252/",
        icon: <FaLinkedinIn className={style["icon"]} />,
      },
      {
        link: "mailto:roescal347@gmail.com",
        icon: <SiGmail className={style["icon"]} />,
      },
      {
        link: "https://api.whatsapp.com/send?phone=5493878344531",
        icon: <IoLogoWhatsapp className={style["icon"]} />,
      },
    ];
  }, []);

  return (
    <section
      id="home"
      className={
        "h-[100vh] max-w-full flex justify-center items-center flex-col gap-[2.5rem] relative"
      }
    >
      <div className="relative w-full text-white text-center flex justify-center items-center flex-col mb-5">
        <h1 className="text-xl">Hola, soy</h1>
        <h2 className="font-bold text-3xl mb-[3rem]">Rodrigo Escalera</h2>
        <div className="mt-[1rem] flex justify-center items-center">
          <h2 className="absolute bottom-0 text-4xl">
            {`${text}`}
            <span>
              <Cursor cursorStyle="|" cursorColor="#14b8a6" />
            </span>
          </h2>
        </div>
      </div>
      <div className="w-full flex justify-center gap-10">
        <Button className="scale-[1.2]">Descargar CV</Button>
        <Button className="scale-[1.2]" buttonType="contained">
          Hablemos!
        </Button>
      </div>
      <div className={style["icons-div"]}>
        {socialMedia.map((element: ISocialMedia, index: number) => (
          <a target="_blank" rel="noreferrer" href={element.link} key={index}>
            <div className={style["icon-container"]}>{element.icon}</div>
          </a>
        ))}
      </div>
      <hr className="isolator absolute bottom-0" />
    </section>
  );
};

export default Home;

"use client";
import React from "react";
import Image from "next/image";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Button from "@/commons/Button";
import ScrollButton from "@/commons/ScrollButton";

const Home = () => {
  const [text] = useTypewriter({
    words: ["Desarrollador Fullstack"],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 70,
  });

  return (
    <section
      id="home"
      className={
        "h-[100vh] max-w-full flex justify-center items-center flex-col gap-[2.5rem] relative"
      }
    >
      <ScrollButton toId="about-me" crossAxis="80%" mainAxis="50%" />
      <div className="relative w-full text-white text-center flex justify-center items-center flex-col mb-5">
        <h1 className="text-xl">Hola, soy</h1>
        <Image
          alt="rodrigo escalera"
          src="/images/profile-picture.jpg"
          width={100}
          height={100}
          className="rounded-full scale-150 m-10"
        />
        <h2 className="font-bold text-3xl mb-[3rem]">Rodrigo Escalera</h2>
        <h2 className="absolute bottom-0 text-4xl">
          {`${text}`}
          <span>
            <Cursor cursorStyle="|" cursorColor="#14b8a6" />
          </span>{" "}
        </h2>
      </div>
      <div className="w-full flex justify-center gap-10 h-[10vh] mb-[5rem]">
        <Button className="scale-[1.2]">Descargar CV</Button>
        <Button className="scale-[1.2]" buttonType="contained">
          Hablemos!
        </Button>
      </div>
      <hr className="isolator absolute bottom-0" />
    </section>
  );
};

export default Home;

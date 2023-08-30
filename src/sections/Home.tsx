"use client";
import React from "react";
import { Cabin } from "next/font/google";
import Image from "next/image";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Button from "@/commons/Button";

const cabin = Cabin({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});
const Home = () => {
  const [text] = useTypewriter({
    words: ["Desarrollador Fullstack"],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 70,
  });

  return (
    <section
      className={`${cabin.className} min-h-[75vh] w-full flex justify-center  flex-col`}
    >
      <div className="relative w-full text-white text-center flex justify-center items-center flex-col">
        <h1 className="text-xl">Hola, soy</h1>
        <Image
          alt="rodrigo escalera"
          src="/images/profile-picture.jpg"
          width={100}
          height={100}
          className="rounded-full scale-150 m-10"
        />
        <h1 className="font-bold text-3xl mb-[3rem]">Rodrigo Escalera</h1>
        <h1 className="absolute bottom-0 text-4xl">
          {`${text}`}
          <span>
            <Cursor cursorStyle="|" cursorColor="#14b8a6" />
          </span>{" "}
        </h1>
      </div>
      <div className="mt-5 w-full flex justify-center gap-10 h-[10vh]">
        <Button className="scale-[1.2]">Descargar CV</Button>
        <Button className="scale-[1.2]" buttonType="contained">
          Hablemos!
        </Button>
      </div>
    </section>
  );
};

export default Home;

import React from "react";
import { Cabin } from "next/font/google";
import Image from "next/image";

const cabin = Cabin({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});
const Home = () => {
  return (
    <section
      className={`${cabin.className} h-[50vh] w-full  flex justify-center`}
    >
      <div className="mt-[5rem] text-white text-center w-1/2 flex justify-center items-center flex-col">
        <h1 className="text-xl">Hola, soy</h1>
        <Image
          alt="rodrigo escalera"
          src="/images/profile-picture.jpg"
          width={100}
          height={100}
          className="rounded-full scale-150 m-10"
        />
        <h1 className="font-bold text-3xl">Rodrigo Escalera</h1>
      </div>
    </section>
  );
};

export default Home;

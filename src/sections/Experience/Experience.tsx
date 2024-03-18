import React, { useMemo } from "react";
import ExperienceCard from "@/commons/ExperienceCard/ExperienceCard";
import style from "./Experience.module.css";
import { ICompany } from "./Experience.types";

function Experience() {
  const companies: ICompany[] = useMemo(() => {
    return [
      {
        name: "SATAP",
        stack: [
          "Typescript",
          "Javascript",
          "React",
          "React Native",
          "Firebase",
          "Google Cloud Functions",
          "Node.js",
          "Express",
        ],
      },
      {
        name: "PLATAFORMA 5",
      },
      {
        name: "XAVIA IOT",
        stack: [" Typescript", "React", "Next.js", "Node.js", "Redux"],
      },
    ];
  }, []);

  return (
    <section
      id="experience"
      className="min-h-[100vh] w-full flex items-center flex-col font-bold"
    >
      <div className="w-full text-center mt-10 ">
        <h2 className="text-4xl text-white">Mi Experiencia</h2>
      </div>
      <div className={style["grid-container"]}>
        {companies.map((company: ICompany, index: number) => (
          <div className={style["grid-item"]} key={index}>
            <ExperienceCard stack={company.stack} companyName={company.name} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;

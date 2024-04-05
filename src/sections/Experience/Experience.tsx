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
        feats: [
          "Diseñé y desarrollé un sistema contable que permitió a la compañía incrementar las ganancias.",
          "Programé nuevas características y funcionalidades en la aplicación android, lo que aumentó la base de usuarios de 20 a 250.",
          "Integré APIs de terceros lo que permitió mejorar enormemente nuestros servicios.",
          "Desarrollé nuevos endpoints lo que permitió la integración y el trabajo con otras compañías.",
        ],

        workPeriod: "Marzo 2022 - Abril 2023",
      },
      {
        name: "PLATAFORMA 5",
        feats: [
          "Lideré sesiones educativas y fomenté la participación activa de los estudiantes a través de ejemplos prácticos.",
          "Lideré y organicé equipos de prácticas profesionales mediante la metodología SCRUM.",
          "Potencié el crecimiento técnico de los estudiantes al brindar correcciones y retroalimentación individualizada sobre su código, generando un aumento exponencial en sus habilidades.",
        ],
        workPeriod: "Abril 2023 - Enero 2024",
      },
      {
        name: "XAVIA IOT",
        stack: [" Typescript", "React", "Next.js", "Node.js", "Redux"],
        feats: [
          "Desarrollé una funcionalidad para manejar listas de restaurante de los usuarios de la aplicación.",
          "Fui responsable de armar componentes reutilizables y agilizar el desarrollo de la aplicación.",
          "Implementé componentes que gestionan el acceso de las funcionalidades de la aplicación según el tipo de usuario (cliente y administrador).",
        ],
        workPeriod: "Septiembre 2023 - Actualidad",
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
            <ExperienceCard
              workPeriod={company.workPeriod}
              stack={company.stack}
              feats={company.feats}
              companyName={company.name}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;

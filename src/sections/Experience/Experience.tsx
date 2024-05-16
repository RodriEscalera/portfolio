import React, { useMemo } from "react";
import style from "./Experience.module.css";
import { ICompany } from "./Experience.types";
import JobContainer from "@/commons/JobContainer/JobContainer";

function Experience() {
  const companies: ICompany[] = useMemo(() => {
    return [
      {
        companyName: "XAVIA IOT",
        name: "Desarrollador Front End",
        stack: [
          " TypeScript",
          "React",
          "React Native",
          "Expo",
          "Next.js",
          "Node.js",
          "Redux",
          "React Context",
        ],
        feats: [
          "Desarrollé una funcionalidad para manejar listas de restaurante de los usuarios de la aplicación.",
          "Fui responsable de armar componentes reutilizables y agilizar el desarrollo de la aplicación.",
          "Implementé componentes que gestionan el acceso de las funcionalidades de la aplicación según el tipo de usuario (cliente y administrador).",
        ],
        workPeriod: "09/23 - Actualidad",
        year: "2024",
      },

      {
        companyName: "PLATAFORMA 5",
        name: "Profesor de Software",
        feats: [
          "Lideré sesiones educativas y fomenté la participación activa de los estudiantes a través de ejemplos prácticos.",
          "Lideré y organicé equipos de prácticas profesionales mediante la metodología SCRUM.",
          "Potencié el crecimiento técnico de los estudiantes al brindar correcciones y retroalimentación individualizada sobre su código, generando un aumento exponencial en sus habilidades.",
        ],
        workPeriod: "04/23 - 01/24",
        year: "2023",
      },
      {
        companyName: "SATAP",
        name: "Desarrollador Full Stack",
        stack: [
          "TypeScript",
          "JavaScript",
          "React",
          "React Native",
          "Redux",
          "Firebase",
          "Google Cloud Functions",
          "Node.js",
          "Express.js",
          "Nest.js",
        ],
        feats: [
          "Diseñé y desarrollé un sistema contable que permitió a la compañía incrementar las ganancias.",
          "Programé nuevas características y funcionalidades en la aplicación android, lo que aumentó la base de usuarios de 20 a 250.",
          "Integré APIs de terceros lo que permitió mejorar enormemente nuestros servicios.",
          "Desarrollé nuevos endpoints lo que permitió la integración y el trabajo con otras compañías.",
        ],
        workPeriod: "03/22 - 04/23",
        year: "2022",
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
      <div className={style["experience-info"]}>
        {companies.map((company: ICompany, index: number) => (
          <JobContainer
            year={company.year}
            stack={company.stack}
            workPeriod={company.workPeriod}
            key={index}
            jobName={company.name}
            companyName={company.companyName}
            features={company.feats}
          />
        ))}
      </div>
    </section>
  );
}

export default Experience;

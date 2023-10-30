import InfoBox from "@/commons/InfoBox";
import React from "react";

function Experience() {
  return (
    <section
      id="experience"
      className="min-h-[100vh] max-w-full flex  items-center flex-col"
    >
      <div className="w-full text-center mt-10 ">
        <h2 className="text-4xl">Mi Experiencia</h2>
      </div>
      <div className="border border-indigo-400 w-[30rem] h-[35rem] mt-10">
        <InfoBox
          positionName="Desarrollador Fullstack"
          companyName="Uma"
          date="Abril 2023 - Agosto 2023"
          contentList={[{ title: "stack", highlights: ["Node.js", "React"] }]}
        />
      </div>
    </section>
  );
}

export default Experience;

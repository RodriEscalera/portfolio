import React, { FC } from "react";
import style from "./ExperienceCard.module.css";
import { IExperienceCard } from "./ExperienceCard.types";

const Waves: FC = () => {
  return (
    <div
      style={{
        position: "absolute",
        overflow: "hidden",
        width: "100%",
        height: "100%",
        borderRadius: "1rem",
      }}
    >
      <div className={style["wave"]}></div>
      <div className={style["wave"]}></div>
      <div className={style["wave"]}></div>
    </div>
  );
};

const ExperienceCard: FC<IExperienceCard> = ({ companyName, stack }) => {
  return (
    <div className={`${style["flip-card"]} ${style["playing"]}`}>
      <div className={style["flip-card-inner"]}>
        <Waves />
        <div className={style["flip-card-front"]}>
          <p className={style["title"]}>{companyName}</p>
          <p>Enero 2023 - Enero 2024</p>
        </div>
        <div className={style["flip-card-back"]}>
          <div className={style["card-back-inner-content"]}>
            {stack && (
              <>
                <p className={style["card-back-title"]}>Stack:</p>
                <div className={style["card-back-stack"]}>
                  {stack.map((technology: string, index: number) => (
                    <div className={style["card-back-technology"]} key={index}>
                      {technology}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;

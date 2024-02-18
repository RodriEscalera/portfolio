import React, { FC, cloneElement } from "react";
import style from "./AboutCard.module.css";

interface IAboutCard {
  title: string;
  subtitle: string;
  icon: JSX.Element;
}

const AboutCard: FC<IAboutCard> = ({ title, icon, subtitle }) => {
  return (
    <div className={style["card"]}>
      <div className={style["content"]}>
        <div className={style["back"]}>
          <div className={style["back-content"]}>
            {cloneElement(icon, { className: style["icon"] })}
            <div className="flex justify-center text-center flex-col">
              <strong className={style["title"]}>{title}</strong>
              <p className="text-[1rem]">{subtitle}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;

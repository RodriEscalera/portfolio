import React, { FC } from "react";
import style from "./Footer.module.css";

const Footer: FC = () => {
  return (
    <div className={style["container"]}>
      <p>© 2024 Rodrigo Escalera</p>
    </div>
  );
};
export default Footer;

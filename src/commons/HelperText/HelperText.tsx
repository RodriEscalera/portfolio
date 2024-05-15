import React, { FC } from "react";
import style from "./HelperText.module.css";

interface HelperTextProps {
  date: string;
}

const HelperText: FC<HelperTextProps> = ({ date }) => {
  return (
    <div className={style["container"]}>
      <div className={style["square"]}>
        <p>{date}</p>
      </div>
      <div className={style["triangle"]}></div>
    </div>
  );
};
export default HelperText;

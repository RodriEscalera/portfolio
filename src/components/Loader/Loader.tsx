import React, { FC } from "react";
import style from "./Loader.module.css";

const Loader: FC = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center spinner-container">
      <div className={style["spinner"]}></div>
    </div>
  );
};

export default Loader;

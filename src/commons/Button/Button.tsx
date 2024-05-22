import React, { ComponentPropsWithoutRef, FC } from "react";
import style from "./Button.module.css";

interface IButton extends ComponentPropsWithoutRef<"button"> {
  children: string;
  customBackground?: string;
  buttonType?: "contained" | "outlined";
}

const Button: FC<IButton> = ({ children, buttonType, className, ...rest }) => {
  const buttonStyleClass = (() => {
    if (!buttonType) {
      return "button-component-outlined";
    }
    switch (buttonType) {
      case "outlined":
        return "button-component-outlined";
      case "contained":
        return "button-component-contained";
    }
  })();
  return (
    <button {...rest} className={`${className} ${style[buttonStyleClass]}`}>
      {children}
    </button>
  );
};

export default Button;

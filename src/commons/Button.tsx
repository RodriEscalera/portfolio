import React, { ComponentPropsWithoutRef, FC } from "react";
import "../styles/Button.css";

interface IButton extends ComponentPropsWithoutRef<"button"> {
  children: string;
  customBackground?: string;
  buttonType?: "contained" | "outlined";
}

const Button: FC<IButton> = ({ children, buttonType, className }) => {
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
    <button className={`${buttonStyleClass} ${className}`}>{children}</button>
  );
};

export default Button;

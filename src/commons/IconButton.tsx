import React, { ComponentPropsWithoutRef, FC } from "react";
import "../styles/IconButton.css";
interface IiconButton extends ComponentPropsWithoutRef<"button"> {
  icon: JSX.Element | JSX.Element[];
  isSelected?: boolean;
}

const IconButton: FC<IiconButton> = ({
  icon,
  className,
  isSelected,
  name,
  ...iconButtonProps
}) => {
  return (
    <button
      name={name}
      className={`${isSelected && "bg-darkGreen"} ${
        !isSelected && "hover-effect"
      } w-[1.7rem] h-[1.7rem] flex scale-[1.6] justify-center items-center rounded-full ${className}`}
      {...iconButtonProps}
    >
      {icon}
    </button>
  );
};

export default IconButton;

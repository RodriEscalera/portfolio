import React, { ComponentPropsWithoutRef, FC } from "react";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { useRouter } from "next/navigation";
import "../styles/ScrollButton.css";

interface IScrollButton extends ComponentPropsWithoutRef<"button"> {
  toId: string;
  crossAxis?: string;
  mainAxis?: string;
}

const ScrollButton: FC<IScrollButton> = ({
  toId,
  className,
  crossAxis,
  mainAxis,
}) => {
  const router = useRouter();

  const handlePush = () => {
    router.push(`#${toId}`);
  };

  return (
    <button
      style={{ top: crossAxis ? crossAxis : "30%" }}
      onClick={handlePush}
      className={`${className} scroll-button-animation z-20 absolute  right-[${
        mainAxis ? mainAxis : "10%"
      }] w-[3rem] h-[3rem] flex justify-center items-center rounded-full`}
    >
      <BsFillArrowDownCircleFill className="w-full h-full bg-darkGreen rounded-full" />
    </button>
  );
};

export default ScrollButton;

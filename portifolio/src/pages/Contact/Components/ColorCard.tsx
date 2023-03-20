import React from "react";

export interface ColorCardProps {
  text: string;
  icon: JSX.Element;
  color: string;
  onClick?: () => void;
  key?: string | number;
}

const ColorCard = ({ text, icon, color, key, onClick }: ColorCardProps) => {
  return (
    <div
      key={key}
      onClick={onClick}
      className={
        `flex flex-col justify-center items-center
        hover:cursor-pointer hover:scale-105 hover:drop-shadow-[0px_0px_0px_rgba(0,0,0,1)]
        transition-all duration-300 ease-in-out 
        drop-shadow-retro w-fit sm:p-16 p-10 border-black border-4 ` + color
      }
    >
      {icon}
      <div className="font-Special-Elite text-4xl mt-8">{text}</div>
    </div>
  );
};

export default ColorCard;

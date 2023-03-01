import React, { memo } from "react";
import { BiPhoneCall } from "react-icons/bi";

export interface ButtonWithShadowProps {
  text: string;
}

const ButtonWithShadow = ({ text }: ButtonWithShadowProps) => {
  const [isbuttonHovered, setisbuttonHovered] = React.useState(false);
  const verifyHover = async () => {
    setisbuttonHovered(true);
  };

  return (
    <button
      onMouseEnter={verifyHover}
      className={` 
      ${!isbuttonHovered && "animate-bounce"} 
      flex bg-[#F5E27B] p-3 w-fit
      self-center sm:self-start
     text-black font-bold font-Jakarta text-xl rounded-lg
     drop-shadow-[8px_8px_0px_rgba(0,0,0,1)] border-black border-[3px]
     hover:cursor-pointer hover:scale-110 hover:drop-shadow-[0px_0px_0px_rgba(0,0,0,1)] hover:border-[4px] 
     transition-all duration-300 ease-in-out`}
    >
      <BiPhoneCall
        className="
      w-6 stroke-1 self-center
      inline-block mr-2"
      />
      {text}
    </button>
  );
};

export default memo(ButtonWithShadow);

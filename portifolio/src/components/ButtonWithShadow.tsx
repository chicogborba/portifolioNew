import React, { memo } from "react";

export interface ButtonWithShadowProps {
  text: string;
  animate?: boolean;
  icon?: JSX.Element;
  onClick?: () => void;
}

const ButtonWithShadow = ({
  text,
  animate,
  icon,
  onClick,
}: ButtonWithShadowProps) => {
  const [isbuttonHovered, setisbuttonHovered] = React.useState(false);
  const verifyHover = async () => {
    setisbuttonHovered(true);
  };

  const animation = animate && !isbuttonHovered && "animate-bounce";

  return (
    <button
      onClick={onClick}
      onMouseEnter={verifyHover}
      className={` 
      ${animation} 
      flex bg-[#F5E27B] p-3 w-fit
      self-center sm:self-start
     text-black font-bold font-Jakarta text-xl rounded-lg
     drop-shadow-[8px_8px_0px_rgba(0,0,0,1)] border-black border-[3px]
     hover:cursor-pointer hover:scale-110 hover:drop-shadow-[0px_0px_0px_rgba(0,0,0,1)]
     transition-all duration-300 ease-in-out`}
    >
      {icon}
      {text}
    </button>
  );
};

export default memo(ButtonWithShadow);

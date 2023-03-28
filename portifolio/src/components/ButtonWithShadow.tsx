import React, { memo } from "react";

export interface ButtonWithShadowProps {
  text: string;
  animate?: boolean;
  icon?: JSX.Element;
  onClick?: () => void;
  disabled?: boolean;
}

const ButtonWithShadow = ({
  text,
  animate,
  icon,
  onClick,
  disabled,
}: ButtonWithShadowProps) => {
  const [isbuttonHovered, setisbuttonHovered] = React.useState(false);
  const verifyHover = async () => {
    setisbuttonHovered(true);
  };

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  const animation = animate && !isbuttonHovered && "animate-bounce";
  const EnableClasses = disabled
    ? "bg-[#C6BEB3] hover:cursor-default"
    : "bg-[#F5E27B] hover:cursor-pointer hover:scale-110 hover:drop-shadow-[0px_0px_0px_rgba(0,0,0,1)]";

  return (
    <button
      onClick={handleClick}
      onMouseEnter={verifyHover}
      className={` 
      ${animation} 
      ${EnableClasses}
      flex p-3 w-fit
      self-center sm:self-start
     text-black font-bold font-Jakarta text-xl rounded-lg
     drop-shadow-retro border-black border-[3px]
     transition-all duration-300 ease-in-out`}
    >
      {icon}
      {text}
    </button>
  );
};

export default memo(ButtonWithShadow);

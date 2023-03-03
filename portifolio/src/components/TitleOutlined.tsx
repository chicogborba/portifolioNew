import React, { memo } from "react";

export interface TitleOutlinedProps {
  text: string;
}

const TitleOutlined = ({ text }: TitleOutlinedProps) => {
  // Text shadow used to create the outline effect
  const style = {
    textShadow:
      "-3px -3px 0 #000, 3px -3px 0 #000, -3px 3px 0 #000, 3px 3px 0 #000",
  };

  return (
    <h1
      style={style}
      className={`
      text-[#C6B2EF] font-Jakarta text-center
       sm:text-left font-extrabold text-5xl sm:text-8xl tracking-widest
       drop-shadow-[6px_6px_0px_rgba(0,0,0,1)] `}
    >
      {text}
    </h1>
  );
};

export default memo(TitleOutlined);

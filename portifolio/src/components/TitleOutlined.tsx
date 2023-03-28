import React, { memo } from "react";

export interface TitleOutlinedProps {
  text: string;
  size?: keyof TextSizes;
  color?: keyof TextColors;
  align?: "left" | "center";
  subtitle?: string;
  className?: string;
}

type TextColors = {
  purpel: string;
  pink: string;
  salmon: string;
};

type TextSizes = {
  small: string;
  medium: string;
  large: string;
};

const TitleOutlined = ({
  text,
  size,
  color,
  align,
  subtitle,
  className,
}: TitleOutlinedProps) => {
  //Define the alignment of the text DEFAULT: left
  const selectedAlign = align ? "md:text-" + align : "sm:text-left";

  //Define the size of the text DEFAULT: large
  const selectedSize = size || "large";
  const textSizes: TextSizes = {
    small: "text-2xl sm:text-5xl",
    medium: "text-4xl sm:text-6xl drop-shadow-[1px_5px_0px_rgba(0,0,0,1)]",
    large: "text-5xl sm:text-8xl drop-shadow-[6px_6px_0px_rgba(0,0,0,1)]",
  };

  //Define the color of the text DEFAULT: purpel
  const selectedColor = color || "purpel";
  const textColors: TextColors = {
    purpel: "text-[#C6B2EF]",
    pink: "text-[#FFB6C1]",
    salmon: "text-[#FFA07A]",
  };

  // Text shadow used to create the outline effect
  const style = {
    textShadow: `2px 0 #000, -2px 0 #000, 0 2px #000, 0 -2px #000,
             1px 1px #000, -1px -1px #000, 1px -1px #000, -1px 1px #000`,
  };

  return (
    <>
      <h1
        style={style}
        className={
          `
      ${textColors[selectedColor]} 
      ${textSizes[selectedSize]}
      ${selectedAlign}
      font-Jakarta font-extrabold
      text-center tracking-widest 
       ` + className
        }
      >
        {text}
      </h1>
      {subtitle && (
        <h2 className="font-Special-Elite text-center mt-3 text-2xl">
          {subtitle}
        </h2>
      )}
    </>
  );
};

export default memo(TitleOutlined);

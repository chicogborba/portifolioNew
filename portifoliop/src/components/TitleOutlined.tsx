import React, { memo } from "react";

const TitleOutlined = ({ text }: { text: string }) => {
  const style = {
    textShadow:
      "-3px -3px 0 #000, 3px -3px 0 #000, -3px 3px 0 #000, 3px 3px 0 #000",
  };
  return (
    <h1
      style={style}
      className={`text-[#C6B2EF] font-Jakarta font-extrabold text-8xl tracking-widest
       drop-shadow-[8px_8px_0px_rgba(0,0,0,1)] text-shadow-[8px_8px_0px_rgba(0,0,0,1)]`}
    >
      {text}
    </h1>
  );
};

export default memo(TitleOutlined);

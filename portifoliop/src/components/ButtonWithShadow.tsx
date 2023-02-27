import React from "react";

const ButtonWithShadow = ({ text }: { text: string }) => {
  return (
    <button
      className="bg-[#F5E27B] p-3 w-fit
     text-black font-bold font-Jakarta text-xl rounded-lg
     drop-shadow-[8px_8px_0px_rgba(0,0,0,1)] border-black border-[3px]
     hover:cursor-pointer hover:scale-110 hover:drop-shadow-[0px_0px_0px_rgba(0,0,0,1)] 
     transition-all duration-300 ease-in-out"
    >
      {text}
    </button>
  );
};

export default ButtonWithShadow;

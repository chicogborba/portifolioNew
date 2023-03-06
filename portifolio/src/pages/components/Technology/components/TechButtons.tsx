import React, { memo } from "react";
import { ListOfTechs } from "../Techs";

export interface TechButtonsProps {
  listOfTechs: ListOfTechs;
  onTechClick: (index: number) => void;
}

const TechButtons = ({ listOfTechs, onTechClick }: TechButtonsProps) => {
  return (
    <div
      className="mt-8 sm:mt-16 min-w-fit 
        grid grid-cols-2 sm:grid-cols-4 gap-8"
    >
      {listOfTechs.map((tech, index) => (
        <div
          onClick={() => onTechClick(index)}
          className="flex flex-col 
        cursor-pointer hover:scale-110 transition-all
        group
        "
        >
          <div
            key={index}
            className={`
            ${tech.bg_color}
            flex justify-center items-center
            aspect-square              
            rounded-full p-6
            border-[2px] border-black
            transition-all
            drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]
            group-hover:drop-shadow-[0px_0px_0px_rgba(0,0,0,1)]
            `}
          >
            <div className="w-10 h-10 sm:w-14 sm:h-14">{tech.icon}</div>
          </div>
          <div
            className="
            z-10 -mt-5 py-1
            text-center font-Jakarta text-base 
            w-full
            bg-white border-[2px] border-black rounded-lg
            transition-all
            drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]
            group-hover:drop-shadow-[0px_0px_0px_rgba(0,0,0,1)]
            "
          >
            {tech.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default memo(TechButtons);

import React, { memo } from "react";
import TitleOutlined from "../../../../../components/TitleOutlined";
import { ListOfTechs } from "../../Technology/Techs";
import star_deco from "../../../../../assets/star_deco.svg";
import arrow_deco from "../../../../../assets/arrow_deco.svg";

export interface TechButtonsProps {
  listOfTechs: ListOfTechs;
  onTechClick: (index: number) => void;
}

const TechButtons = ({ listOfTechs, onTechClick }: TechButtonsProps) => {
  return (
    <div className="xl:ml-8 flex flex-col justify-center">
      <div>
        <div>
          <img
            alt="Geometric decoration"
            width="70"
            height="70"
            className="h-[0px] sm:h-[70px] -mt-8 -ml-14 absolute animate-star-pulse"
            src={star_deco}
          />
          <img
            alt="Geometric decoration"
            width="32"
            height="32"
            className="h-[0px] sm:h-[32px] mt-8 absolute animate-star-pulse"
            src={star_deco}
          />{" "}
          <img
            alt="Geometric decoration"
            width="32"
            height="32"
            className="h-[0px] sm:h-[32px] -mt-2 ml-6 absolute animate-star-pulse"
            src={star_deco}
          />
        </div>
        <TitleOutlined
          text="Main Techs"
          color="salmon"
          size="medium"
          subtitle="( Click the icons  )"
          align="center"
        />
        <div className="rotate-180">
          <img
            alt="Geometric decoration"
            width="70"
            height="70"
            className=" h-[0px] sm:h-[70px] -mt-8 -ml-14 absolute animate-star-pulse"
            src={star_deco}
          />
          <img
            alt="Geometric decoration"
            width="32"
            height="32"
            className="h-[0px] sm:h-[32px] mt-8 absolute animate-star-pulse"
            src={star_deco}
          />{" "}
          <img
            alt="Geometric decoration"
            width="32"
            height="32"
            className="h-[0px] sm:h-[32px] -mt-2 ml-6 absolute animate-star-pulse"
            src={star_deco}
          />
        </div>
      </div>
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
      <img
        alt="Geometric decoration"
        width="170"
        height="170"
        className=" animate-draw h-0 xl:h-[170px] -ml-44 -mt-32 absolute"
        src={arrow_deco}
      />
    </div>
  );
};

export default memo(TechButtons);

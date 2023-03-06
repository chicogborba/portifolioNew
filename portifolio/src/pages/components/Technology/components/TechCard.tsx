import React from "react";
import WindowContainer from "../../../../components/WindowContainer";
import { list_of_techs } from "../techData";
import purple_deco from "../../../../assets/purple_deco.svg";

export interface TechCardProps {
  selectedTechIndex: number;
}

const TechCard = ({ selectedTechIndex }: TechCardProps) => {
  return (
    <div className="mt-16 mb-20 xl:mr-32">
      <img
        alt="Geometric decoration"
        width="444"
        height="335"
        className="drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] mt-52 -ml-20 
          h-[0px] sm:h-[370px] xl:h-[450px] absolute"
        src={purple_deco}
      />
      <img
        alt="Geometric decoration"
        width="444"
        height="335"
        className="drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] -mt-32 ml-12 
          h-0 sm:h-[370px] xl:h-[450px] absolute"
        src={purple_deco}
      />
      <div className="relative h-fit w-fit">
        <div
          className="z-10 absolute
          w-full h-full 
          top-2 left-2
         bg-white border-[3px] border-black rounded-lg"
        />
        <div
          className="z-0 absolute
          w-full h-full 
          top-4 left-4
         bg-white border-[3px] border-black rounded-lg"
        />
        <div className="z-20 max-w-sm relative">
          <WindowContainer
            headerColor={list_of_techs[selectedTechIndex].bg_color}
            headerTitle={list_of_techs[selectedTechIndex].name}
          >
            <div className="flex flex-col items-center">
              <div className="w-36 h-36 mb-4 mt-8">
                {list_of_techs[selectedTechIndex].icon}
              </div>
              <div
                className="line-clamp-[8] font-Special-Elite text-lg
             sm:text-xl text-center mx-4 sm:mx-16 mb-8"
              >
                {list_of_techs[selectedTechIndex].text}
              </div>
            </div>
          </WindowContainer>
        </div>
      </div>
    </div>
  );
};

export default TechCard;

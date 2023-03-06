import React from "react";
import WindowContainer from "../../../../components/WindowContainer";
import { list_of_techs } from "../techData";

export interface TechCardProps {
  selectedTechIndex: number;
}

const TechCard = ({ selectedTechIndex }: TechCardProps) => {
  return (
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
  );
};

export default TechCard;

import React from "react";
import WindowContainer from "../../../../components/WindowContainer";
import { list_of_techs } from "../techData";

export interface TechCardProps {
  selectedTechIndex: number;
}

const TechCard = ({ selectedTechIndex }: TechCardProps) => {
  return (
    <div className="relative">
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
          headerColor={list_of_techs[selectedTechIndex].color}
          headerTitle={list_of_techs[selectedTechIndex].name}
        >
          <div className="flex flex-col items-center">
            {list_of_techs[selectedTechIndex].icon}
            <div className="line-clamp-[9] font-Special-Elite text-lg sm:text-xl text-center mx-4 sm:mx-16 mb-8">
              {list_of_techs[selectedTechIndex].text}
            </div>
          </div>
        </WindowContainer>
      </div>
    </div>
  );
};

export default TechCard;

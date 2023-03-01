import React, { memo, useEffect } from "react";
import WindowContainer from "../../../components/WindowContainer";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { HeaderColors } from "../../../components/WindowHeader";
import { list_of_techs } from "./techData";

export type tech = {
  name: string;
  text: string;
  icon: JSX.Element;
  color: HeaderColors;
  id: number;
};

export type ListOfTechs = tech[];

const Techs = () => {
  const [selectedTechIndex, setSelectedTechIndex] = React.useState(0);

  const onTechCardClick = () => {
    if (selectedTechIndex < list_of_techs.length - 1) {
      setSelectedTechIndex((p) => p + 1);
    } else {
      setSelectedTechIndex(0);
    }
  };

  return (
    <div
      className="flex justify-center flex-row
     bg-[#22FFA2] w-screen h-auto 
     p-16 border-b-[6px] border-black"
    >
      <div onClick={onTechCardClick} className="relative">
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
              <div className="font-Special-Elite text-lg sm:text-xl text-center mx-4 sm:mx-16 mb-8">
                {list_of_techs[selectedTechIndex].text}
              </div>
            </div>
          </WindowContainer>
        </div>
      </div>
    </div>
  );
};

export default memo(Techs);

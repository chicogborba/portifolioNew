import React, { memo, useEffect } from "react";
import WindowContainer from "../../../components/WindowContainer";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { HeaderColors } from "../../../components/WindowHeader";
import { list_of_techs } from "./techData";
import TechCard from "./components/TechCard";
import TitleOutlined from "../../../components/TitleOutlined";

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

  return (
    <div
      className="flex flex-wrap-reverse justify-center flex-row
     bg-[#22FFA2] w-screen h-auto 
     p-16 border-b-[6px] border-black
     gap-16
     "
    >
      <TechCard selectedTechIndex={selectedTechIndex} />
      <div className="sm:ml-8 flex flex-col justify-center">
        <TitleOutlined
          text="Main Techs"
          color="salmon"
          size="medium"
          align="center"
        />
        <div
          className="mt-8 sm:mt-16 min-w-fit 
        grid grid-cols-2 sm:grid-cols-4 gap-8"
        >
          {list_of_techs.map((tech, index) => (
            <div
              onClick={() => setSelectedTechIndex(index)}
              className="flex flex-col 
            cursor-pointer hover:scale-110 transition-all
            group
            "
            >
              <div
                key={index}
                className="
              flex justify-center items-center
              aspect-square              
              rounded-full p-6
              bg-[#4EE7DE] border-[3px] border-black
              transition-all
              drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]
              group-hover:drop-shadow-[0px_0px_0px_rgba(0,0,0,1)]
              "
              >
                <div className="w-10 h-10 sm:w-14 sm:h-14">{tech.icon}</div>
              </div>
              <div
                className="
              z-10 -mt-5 py-1
              text-center font-Jakarta text-base 
              w-full
              bg-white border-[3px] border-black rounded-lg
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
      </div>
    </div>
  );
};

export default memo(Techs);

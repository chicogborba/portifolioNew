import React, { memo, useEffect } from "react";
import WindowContainer from "../../../components/WindowContainer";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { HeaderColors } from "../../../components/WindowHeader";
import { list_of_techs } from "./techData";
import TechCard from "./components/TechCard";

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
      <TechCard selectedTechIndex={selectedTechIndex} />
    </div>
  );
};

export default memo(Techs);

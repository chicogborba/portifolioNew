import React, { memo } from "react";
import { list_of_techs } from "./techData";
import TechCard from "./components/TechCard";
import TechButtons from "./components/TechButtons";

export type Tech = {
  name: string;
  text: string;
  icon: JSX.Element;
  bg_color: string;
  id: number;
};

export type ListOfTechs = Tech[];

const Techs = () => {
  const [selectedTechIndex, setSelectedTechIndex] = React.useState(0);

  return (
    <div
      className="flex flex-wrap-reverse justify-center flex-row
     bg-[#22FFA2] w-full h-auto 
     p-16 border-b-[6px] border-black
     gap-16
     "
    >
      <TechCard selectedTechIndex={selectedTechIndex} />
      <TechButtons
        onTechClick={setSelectedTechIndex}
        listOfTechs={list_of_techs}
      />
    </div>
  );
};

export default memo(Techs);

import React, { memo } from "react";
import { list_of_techs } from "./techData";
import TechCard from "./components/TechCard";
import TitleOutlined from "../../../components/TitleOutlined";
import TechButtons from "./components/TechButtons";
import purple_deco from "../../../assets/purple_deco.svg";

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
     bg-[#22FFA2] w-screen h-auto 
     p-16 border-b-[6px] border-black
     gap-16
     "
    >
      <div className="mt-16 mb-20 mr-20">
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
          h-[0px] sm:h-[370px] xl:h-[450px] absolute"
          src={purple_deco}
        />
        <TechCard selectedTechIndex={selectedTechIndex} />
      </div>
      <div className="sm:ml-8 flex flex-col justify-center">
        <TitleOutlined
          text="Main Techs"
          color="salmon"
          size="medium"
          align="center"
        />
        <TechButtons
          onTechClick={setSelectedTechIndex}
          listOfTechs={list_of_techs}
        />
      </div>
    </div>
  );
};

export default memo(Techs);

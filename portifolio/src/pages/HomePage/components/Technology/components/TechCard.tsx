import React, { useEffect, useState } from "react";
import WindowContainer from "../../../../../components/WindowContainer";
import { list_of_techs } from "../techData";
import purple_deco from "../../../../../assets/purple_deco.svg";

export interface TechCardProps {
  selectedTechIndex: number;
}

const TechCard = ({ selectedTechIndex }: TechCardProps) => {
  // Used to show the previous card while the card change animation is happening
  const [previusSelectedTechIndex, setPreviusSelectedTechIndex] =
    useState(selectedTechIndex);

  // Changing the scale of the decoration and the card on diferent order
  const [decoScales, setDecoScales] = useState([
    "scale-100",
    "scale-100",
    "scale-100",
  ]);
  useEffect(() => {
    setDecoScales(["scale-0", "scale-100", "scale-100"]);
    setTimeout(() => {
      setDecoScales(["scale-0", "scale-0", "scale-100"]);
    }, 200);
    setTimeout(() => {
      setDecoScales(["scale-0", "scale-0", "scale-0"]);
    }, 300);
    setTimeout(() => {
      setPreviusSelectedTechIndex(selectedTechIndex);
      setDecoScales(["scale-0", "scale-0", "scale-100"]);
    }, 600);
    setTimeout(() => {
      setDecoScales(["scale-0", "scale-100", "scale-100"]);
    }, 800);
    setTimeout(() => {
      setDecoScales(["scale-100", "scale-100", "scale-100"]);
    }, 900);
  }, [selectedTechIndex]);

  return (
    <div className="mt-16 mb-20 xl:mr-32">
      <img
        alt="Geometric decoration"
        width="444"
        height="335"
        className={` ${decoScales[1]} drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] mt-52 -ml-20 
          h-[0px] sm:h-[370px] xl:h-[450px] absolute transition-all`}
        src={purple_deco}
      />
      <img
        alt="Geometric decoration"
        width="444"
        height="335"
        className={`${decoScales[0]} drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] -mt-32 ml-12 
          h-0 sm:h-[370px] xl:h-[450px] absolute transition-all`}
        src={purple_deco}
      />
      <div className={`${decoScales[2]} relative h-fit w-fit transition-all`}>
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
            headerColor={list_of_techs[previusSelectedTechIndex].bg_color}
            headerTitle={list_of_techs[previusSelectedTechIndex].name}
          >
            <div className="flex flex-col items-center">
              <div className="w-36 h-36 mb-4 mt-8">
                {list_of_techs[previusSelectedTechIndex].icon}
              </div>
              <div
                className="line-clamp-[8] font-Special-Elite text-lg
             sm:text-xl text-center mx-4 sm:mx-16 mb-8"
              >
                {list_of_techs[previusSelectedTechIndex].text}
              </div>
            </div>
          </WindowContainer>
        </div>
      </div>
    </div>
  );
};

export default TechCard;

import React from "react";
import picture from "../../../../assets/pictures/profile_picture.webp";
import Tilt from "react-parallax-tilt";
import IntroducrionText from "./IntroducrionText";
import red_deco from "../../../../assets/red_deco.svg";

const Introducrion = () => {
  return (
    <div
      className="
    flex justify-center flex-row flex-wrap-reverse
    overflow-hidden
     bg-[#22F2FF] w-full h-auto 
     p-16 
     border-b-[6px] border-black"
    >
      <IntroducrionText />
      <div className=" relative flex flex-col sm:mb-20 justify-center items-center">
        <img
          alt="Geometric decoration"
          width="470"
          height="470"
          className="drop-shadow-[10px_10px_0px_rgba(0,0,0,1)] left-20 top-40
          h-[0px] sm:h-[370px] xl:h-[450px] absolute sm:animate-spin-slow"
          src={red_deco}
        />
        <div>
          <Tilt
            gyroscope={true}
            transitionSpeed={300}
            trackOnWindow
            tiltReverse
            perspective={1000}
          >
            <div
              className="bg-white xl:rotate-6 m-1 
            sm:m-8 mb-8 rounded-md sm:rounded-lg border-black border-4 
            w-fit h-fit px-5 sm:px-7 pt-7 sm:pb-8 pb-4"
            >
              <img
                alt="Polaroid picture of Me"
                data-tilt
                src={picture}
                width="320"
                height="320"
                className="max-w-full rounded-md sm:rounded-lg h-auto border-black border-4"
              />
              <p className="font-Special-Elite text-center mt-3 sm:mt-6 text-2xl xl:text-4xl sm:text-3xl">
                Front-end Dev
              </p>
            </div>
          </Tilt>
        </div>
      </div>
    </div>
  );
};

export default Introducrion;

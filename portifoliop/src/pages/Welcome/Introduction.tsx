import React from "react";
import TitleOutlined from "../../components/TitleOutlined";
import picture from "../../assets/pictures/profile_picture.png";
import Tilt from "react-parallax-tilt";

const Introducrion = () => {
  return (
    <div className="flex flex-row flex-wrap-reverse bg-[#22F2FF] w-screen p-16 border-b-[6px] border-black">
      <Introducrion />
      <div className="flex flex-1 justify-center items-center">
        <Tilt
          transitionSpeed={300}
          trackOnWindow
          tiltReverse
          perspective={1300}
        >
          <div className="bg-white m-6 mb-8 rounded-lg border-black border-4 w-fit h-fit px-7 pt-7 pb-8">
            <img
              data-tilt
              src={picture}
              width="320"
              height="320"
              className="max-w-full rounded-lg h-auto border-black border-4"
            />
            <p className="font-Special-Elite text-center mt-6 text-4xl">
              Front-end Dev
            </p>
          </div>
        </Tilt>
      </div>
    </div>
  );
};

export default Introducrion;

import React from "react";
import ButtonWithShadow from "../../../../components/ButtonWithShadow";
import TitleOutlined from "../../../../components/TitleOutlined";
import xDeco from "../../../../assets/x_deco.svg";
import { BiPhoneCall } from "react-icons/bi";

const IntroducrionText = () => {
  return (
    <div className="flex sm:mr-28 flex-col">
      <TitleOutlined text="Francisco" />
      <img
        alt="Geometric decoration"
        src={xDeco}
        width={"368"}
        height={"368"}
        className="absolute ml-[22rem] -mt-4 sm:h-[380px] h-[0px]"
      />
      <TitleOutlined text="Borba" />
      <p
        className="
      font-Special-Elite text-xl text-center
      sm:text-2xl sm:text-left whitespace-pre-line 
      mt-4 mb-16"
      >
        {`
        Hi, my name is Francisco Borba and I am a front-end
        developer with experience working on large scale
        projects. 
        
        I have a strong passion for UX/UI design and I am
        always looking for another challenge to further
        enhance my skills and knowledge.`}
      </p>
      <ButtonWithShadow
        text="Contact me"
        animate
        icon={
          <BiPhoneCall
            className="
      w-6 stroke-1 self-center
      inline-block mr-2"
          />
        }
      />
    </div>
  );
};

export default IntroducrionText;

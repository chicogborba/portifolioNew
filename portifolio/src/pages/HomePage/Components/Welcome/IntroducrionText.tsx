import React from "react";
import ButtonWithShadow from "../../../../components/ButtonWithShadow";
import TitleOutlined from "../../../../components/TitleOutlined";
import xDeco from "../../../../assets/x_deco.svg";
import { BiPhoneCall } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const IntroducrionText = () => {
  const navigate = useNavigate();
  const navigateContact = () => {
    navigate("/contact");
  };

  return (
    <div className="flex sm:mr-28 flex-col">
      <TitleOutlined text="Francisco" />
      <img
        alt="Geometric decoration"
        src={xDeco}
        width={"368"}
        height={"368"}
        className="absolute ml-[22rem] -mt-4 lg:h-[380px] h-[0px]"
      />
      <TitleOutlined text="Borba" />
      <p
        className="
      font-Special-Elite text-xl text-center
      sm:text-2xl sm:text-left whitespace-pre-line 
      mt-4 mb-16"
      >
        {`
        Hi, my name is Francisco Borba and I am a 
        passionate developer who loves new challenges.

        I have a strong passion for UX/UI design,
        low-level programming and mathematics in general.
        I am always looking for new ways to improve my skills.
        `}
      </p>
      <ButtonWithShadow
        text="Contact me"
        onClick={navigateContact}
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

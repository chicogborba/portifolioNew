import React from "react";
import ButtonWithShadow from "../../../components/ButtonWithShadow";
import TitleOutlined from "../../../components/TitleOutlined";

const Introducrion = () => {
  return (
    <div className="flex-[2]">
      <TitleOutlined text="Francisco" />
      <TitleOutlined text="Borba" />
      <p className="font-Special-Elite mt-12 mb-12 text-2xl text-left whitespace-pre-line">
        {`
        Hi, my name is Francisco Borba and I am a front-end developer with experience working on large scale projects. 
        
        I have a strong passion for UX/UI design and I am always looking for another challenge to further enhance my skills and knowledge.`}
      </p>
      <ButtonWithShadow text="Contact me" />
    </div>
  );
};

export default Introducrion;

import React from "react";
import TitleOutlined from "../../../components/TitleOutlined";
import PhotoSlider from "./PhotoSlider";

const ProjectGalery = () => {
  return (
    <>
      <div className="bg-[#FFA722] w-full h-auto py-8">
        <div className="flex w-full h-auto justify-center items-center">
          <div className="w-60 h-0 border-2 border-black rounded-full" />
          <div className="font-Special-Elite text-5xl -mb-4 mx-4">/</div>
          <TitleOutlined
            className="mb-4"
            text={"Galery"}
            color="pink"
            align="center"
          />
          <div className="font-Special-Elite text-5xl -mb-4 mx-4">/</div>
          <div className="w-60 h-0 border-2 border-black rounded-full" />
        </div>
        <PhotoSlider />
      </div>
    </>
  );
};

export default ProjectGalery;

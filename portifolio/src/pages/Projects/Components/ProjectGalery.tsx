import React from "react";
import TitleOutlined from "../../../components/TitleOutlined";
import PhotoSlider from "./PhotoSlider";

const ProjectGalery = () => {
  return (
    <>
      <div className="bg-[#FFA722] w-full h-auto py-8">
        <TitleOutlined
          className="mb-4"
          text={"Galery"}
          color="pink"
          align="center"
        />
        <PhotoSlider />
      </div>
    </>
  );
};

export default ProjectGalery;

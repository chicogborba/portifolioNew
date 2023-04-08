import React from "react";
import TitleOutlined from "../../components/TitleOutlined";
import { projectData } from "./ProjectData";
import { useParams } from "react-router-dom";
import ProjectPage from "./Components/ProjectPage";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import PolaroidPhoto from "../../components/PolaroidPhoto";
import PhotoSlider from "./Components/PhotoSlider";
import ProjectGalery from "./Components/ProjectGalery";

const Projects = () => {
  const { ProjectId } = useParams();

  const project = projectData.find((project) => project.id === ProjectId);
  const isNotCommingSoon = !!project;

  return (
    <>
      <div
        className="
    flex flex-col flex-wrap-reverse
    justify-center items-center
    sm:gap-20 gap-10
    overflow-hidden
     bg-[#FFDD22] w-full h-auto min-h-screen-header 
     sm:p-20 p-10
     border-b-[6px] border-black"
      >
        {isNotCommingSoon ? (
          <ProjectPage project={project} />
        ) : (
          <div>
            <TitleOutlined text="Coming Soon!" color="pink" />
          </div>
        )}
      </div>
      {isNotCommingSoon && <ProjectGalery projectId={ProjectId || "0"} />}
    </>
  );
};

export default Projects;

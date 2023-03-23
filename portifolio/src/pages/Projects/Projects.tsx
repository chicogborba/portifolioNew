import React from "react";
import ShadowContainer from "./Components/ShadowContainer";
import TitleOutlined from "../../components/TitleOutlined";

import { projectData } from "./ProjectData";
import { useParams } from "react-router-dom";
import ProjectPage from "./Components/ProjectPage";

const Projects = () => {
  let { ProjectId } = useParams();

  const project = projectData.find((project) => project.id === ProjectId);

  const isCommingSoon = !!project;

  console.log(project);

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
        {isCommingSoon ? (
          <ProjectPage project={project} />
        ) : (
          <div>
            <TitleOutlined text="Coming Soon!" color="pink" />
          </div>
        )}
      </div>
    </>
  );
};

export default Projects;

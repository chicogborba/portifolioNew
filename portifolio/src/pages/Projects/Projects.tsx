import React from "react";
import ShadowContainer from "./Components/ShadowContainer";
import TitleOutlined from "../../components/TitleOutlined";

import { projectData } from "./ProjectData";
import { useParams } from "react-router-dom";

const Projects = () => {
  let { ProjectId } = useParams();

  const project = projectData.find((project) => project.id === ProjectId);

  return (
    <>
      <div
        className="
    flex flex-col flex-wrap-reverse
    justify-center items-center
    sm:gap-20 gap-10
    overflow-hidden
     bg-[#FFDD22] w-full h-auto 
     sm:p-20 p-10
     border-b-[6px] border-black"
      >
        <div className="max-w-7xl text-center sm:text-left w-full">
          <TitleOutlined text="Portfólio" color="pink" />
          <h2 className="font-Jakarta text-2xl sm:text-3xl mt-3 sm:mt-6">
            April 2022 / Tech Stack
          </h2>
        </div>
        <div className=" flex flex-col lg:grid grid-cols-2 gap-8 max-w-7xl">
          <ShadowContainer className=" gap-8 flex-wrap flex justify-between col-span-2 ">
            <div className=" sm:min-w-[15rem] flex-1">
              <h3 className=" mb-4 text-center sm:text-left font-bold text-3xl sm:text-4xl font-Jakarta">
                Main Idea
              </h3>
              <p className="text-center sm:text-left text-xl sm:text-2xl">
                {project?.main_ideia}
              </p>
            </div>
            <img
              alt={"exemple image"}
              height="170px"
              width="500px"
              className=" max-h-[170px] w-auto"
              src={project?.exemple_img}
            />
          </ShadowContainer>
          <div className="flex flex-col gap-8">
            {project?.used_techs.map((tech) => (
              <ShadowContainer className="items-center gap-8 sm:flex-row flex-col flex">
                <div className="flex-1 w-20 sm:w-auto">{tech.icon}</div>
                <div className="flex-[4] flex flex-col sm:items-start items-center">
                  <h3 className="flex mb-1 text-center sm:text-left font-bold text-2xl sm:text-3xl font-Jakarta">
                    {tech.name}
                  </h3>
                  <p className="text-center sm:text-left text-xl sm:text-2xl">
                    {tech.used}
                  </p>
                </div>
              </ShadowContainer>
            ))}
          </div>
          <div className="flex flex-col gap-8">
            <ShadowContainer className="">
              <h3 className=" mb-4  text-center font-bold text-3xl sm:text-4xl font-Jakarta">
                Execution
              </h3>
              <p className="text-center sm:text-left text-xl sm:text-2xl">
                {project?.execution}
              </p>
            </ShadowContainer>
            <ShadowContainer className=" flex flex-col justify-center">
              <h3 className=" mb-4 text-center font-bold text-3xl sm:text-4xl font-Jakarta">
                What I Learned
              </h3>
              <ul className="ml-10 sm:ml-14 text-xl sm:text-2xl list-disc text-left">
                {project?.learned.map((learned) => (
                  <li className="mt-4">{learned}</li>
                ))}
              </ul>
            </ShadowContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;

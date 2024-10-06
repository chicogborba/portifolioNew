import React from "react";
import TitleOutlined from "../../../components/TitleOutlined";
import { ProjectData } from "../ProjectData";
import ShadowContainer from "./ShadowContainer";
import xDeco from "../../../assets/x_deco.svg";
import blueDeco from "../../../assets/blue_deco.svg";
import { FaGithub } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { RiSignalTowerFill } from "react-icons/ri";

export interface ProjectPageProps {
  project: ProjectData | undefined;
}
const ProjectPage = ({ project }: ProjectPageProps) => {
  const [isbuttonHovered, setisbuttonHovered] = React.useState(false);
  const verifyHover = async () => {
    setisbuttonHovered(true);
  };
  return (
    <>
      <div className="flex justify-around max-w-7xl w-full">
        <div className="max-w-7xl text-center sm:text-left w-full">
          <TitleOutlined text={project?.title || ""} color="pink" />
          <h2 className="font-Jakarta text-2xl sm:text-3xl mt-3 sm:mt-6">
            {project?.date} / Tech Stack
          </h2>
        </div>
        {project?.previewLink && (
          <div className="flex gap-4 mt-4">
            <a
              onMouseEnter={verifyHover}
              className={`bg-[#f5bc62] font-extrabold 
              hover:cursor-pointer hover:scale-110 hover:drop-shadow-[0px_0px_0px_rgba(0,0,0,1)] 
              flex rounded-lg h-fit gap-4 drop-shadow-retro border-4 p-4 border-black text-2xl items-center
              transition-all ${!isbuttonHovered ? "animate-bounce" : ""}`}
              href={project?.previewLink || ""}
              target="_blank"
              rel="noreferrer"
            >
              DEMO
              <RiSignalTowerFill className="w-10 h-10" />
            </a>
            <a
              className="bg-[#8095ad] flex rounded-lg flex-col h-fit transition-all
              hover:cursor-pointer hover:scale-110 hover:drop-shadow-[0px_0px_0px_rgba(0,0,0,1)] 
              justify-center items-center drop-shadow-retro p-4 border-4 border-black text-2xl"
              href={project?.repoLink || ""}
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoGithub className="w-10 h-10" />
            </a>
          </div>
        )}
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
          <div className="flex overflow-hidden w-auto h-24">
            <img
              alt="Geometric decoration"
              src={xDeco}
              width={"430"}
              height={"430"}
              className="self-center w-full"
            />
          </div>
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
          <div className="flex overflow-hidden w-auto h-24">
            <img
              alt="Geometric decoration"
              src={xDeco}
              width={"430"}
              height={"430"}
              className="self-center w-full"
            />
          </div>
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
    </>
  );
};

export default ProjectPage;

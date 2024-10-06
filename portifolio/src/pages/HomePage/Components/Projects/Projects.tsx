import React from "react";
import ButtonWithShadow from "../../../../components/ButtonWithShadow";
import TitleOutlined from "../../../../components/TitleOutlined";
import WindowContainer from "../../../../components/WindowContainer";
import { projectData } from "./ProjectData";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();

  const handleProjectClick = (projectID: string) => {
    navigate(`/project/${projectID}`);
  };

  return (
    <div
      className="
    flex justify-center flex-col flex-wrap-reverse
     bg-[#FFDD22] w-full h-auto 
     border-b-[6px] border-black
     pb-16"
    >
      <div
        className="
    flex items-center flex-col"
      >
        <div className="mb-12 mt-12">
          <TitleOutlined
            text="Projects"
            size="medium"
            color="pink"
            align="left"
          />
        </div>
        <div className="w-auto grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4">
          {projectData.map((project) => (
            <div className="w-[18rem] ">
              <WindowContainer
                headerColor={project.bg_color}
                headerTitle={project.name}
              >
                <div className="flex flex-col justify-center items-center">
                  <div className="w-44 h-44 flex items-center justify-center">
                    {project.icon}
                  </div>
                  <div className="mb-8">
                    <ButtonWithShadow
                      disabled={project.name === "Comin Soon"}
                      onClick={() => handleProjectClick(project.id)}
                      text="Read More"
                    />
                  </div>
                </div>
              </WindowContainer>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

import React from "react";
import Projects from "./components/Projects/Projects";
import Techs from "./components/Technology/Techs";
import Introducrion from "./components/Welcome/Introduction";

const HomePage = () => {
  return (
    <>
      <Introducrion />
      <Techs />
      <Projects />
    </>
  );
};

export default HomePage;

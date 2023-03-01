import React from "react";
import picture from "../assets/pictures/profile_picture.png";
import Techs from "./components/Technology/Techs";
import Introducrion from "./components/Welcome/Introduction";

const HomePage = () => {
  return (
    <>
      <Introducrion />
      <Techs />
    </>
  );
};

export default HomePage;

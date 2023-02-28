import React from "react";
import picture from "../assets/pictures/profile_picture.png";
import Techs from "./Technology/Techs";
import Introducrion from "./Welcome/Introduction";

const HomePage = () => {
  return (
    <>
      <Introducrion />
      <Techs />
    </>
  );
};

export default HomePage;

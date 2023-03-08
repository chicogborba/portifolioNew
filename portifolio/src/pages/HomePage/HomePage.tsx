import React from "react";
import Projects from "./components/Projects/Projects";
import Techs from "./components/Technology/Techs";
import Introducrion from "./components/Welcome/Introduction";
import img from "../../assets/favicon.ico";
import { Helmet } from "react-helmet-async";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>React Portfólio - Francisco Borba</title>
        <meta
          name="description"
          content="A neubrutalist portfólio for a web front-end developer "
        />
        <meta name="robots" content="index, follow" />
        <link rel="icon" type="image/webp" href={img} sizes="16x16" />
        <meta name="author" content="Francisco Borba" />
        <meta name="keywords" content="React, Portfólio, Francisco Borba" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="image" content={img} />
      </Helmet>
      <Introducrion />
      <Techs />
      <Projects />
    </>
  );
};

export default HomePage;

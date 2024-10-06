import portfolio_img from "../../assets/pictures/portfolio_img.webp";
import landingPageImg from "../../assets/pictures/landingPage.webp";
import WFCMain from "../../assets/pictures/WFC_main.png";
import ESMain from "../../assets/pictures/ES_Main.png";

import CalculatorBanner from "../../assets/CalculatorBanner.png";
import { FaAws, FaCss3Alt, FaHtml5, FaPython, FaReact } from "react-icons/fa";
import {
  SiJavascript,
  SiLeaflet,
  SiMaterialdesign,
  SiOpencv,
  SiTypescript,
} from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiSocketdotio } from "react-icons/si";
import { SiReactrouter } from "react-icons/si";
import { IoLogoCss3, IoLogoJavascript, IoLogoNodejs } from "react-icons/io";
import { IoCubeOutline } from "react-icons/io5";
import { SiBlender } from "react-icons/si";
import { MdOutlineAnimation } from "react-icons/md";

export type UsedTech = {
  name: string;
  icon: JSX.Element;
  used: string;
};

export type ProjectData = {
  id: string;
  date: string;
  title: string;
  previewLink?: string;
  repoLink?: string;
  main_ideia: string;
  execution: string;
  learned: string[];
  used_techs: UsedTech[];
  exemple_img: string;
};

export const projectData: ProjectData[] = [
  {
    id: "1",
    date: "April 2023",
    title: "Portifolio",
    previewLink: "https://portifolio-new-topaz.vercel.app/",
    repoLink: "https://github.com/chicogborba/portifolioNew",
    main_ideia: `A portfolio website that utilizes a neubrutalist design to capture attention. 
    This React and TypeScript single-page application showcases my current tech stack and recent projects. 
    By highlighting my expertise and experience.`,
    execution: `
    To begin this project, I started by creating a task list in Notion. Then, I designed the project
    using Figma while learning about neubrutalist design on Dribble. Next, I coded the project using VS Code 
    and Vite with the TS template. Since this project required a lot of custom styles, I opted not to use a 
    design library like MUI and built components from scratch using TailwindCSS. Once I finished creating
    all the components, I developed the pages and routes using React Router, and then tested and fine-tuned
    the responsiveness of the design.
    Additionally, I made sure to optimize the project's SEO by using HelmtJS.
    Finally, I deployed the project on Vercel and GitHub.`,
    learned: [
      "Learned that TailwindCSS is fast but challenging to maintain; may use it for smaller projects",
      "Discovered how to host a React app with Vercel and GitHub",
      "Explored new features of React Router update, such as the navigate method for redirecting users to other pages without the need for the Link component or useHistory hook",
    ],
    used_techs: [
      {
        name: "ReactJS",
        icon: <FaReact className="w-full h-full" />,
        used: "Front-end framework used to create the SPA",
      },
      {
        name: "Tailwind",
        icon: <SiTailwindcss className="w-full h-full" />,
        used: "Used to create all the styles and components from scratch",
      },
      {
        name: "React Router",
        icon: <SiReactrouter className="w-full h-full" />,
        used: "Used to create all the routes and navigation  ",
      },
      {
        name: "Typescript",
        icon: <SiTypescript className="w-full h-full" />,
        used: "Used to add types to the project ",
      },
    ],
    exemple_img: portfolio_img,
  },
  {
    id: "2",
    date: "November 2022",
    title: "Landing Page",
    main_ideia: `A landing page that showcases a writer’s unique works.
    This website is a single-page application built with React and MUI,
    featuring a mobile-first design. It displays the writer’s latest works, pictures and texts.`,
    execution: `
    I started the project by creating a minimalist design
    using the components of the MUI React library inside Figma.
    Then I used CRA and Yarn to start the application and install React
    Router, for the SPA, and the MUI v5 library. I recreated the design
    decided on Figma with minor changes adding CSS animations and transitions.
    After everything was done I added texts, photos and the book links and to finish
    the project I deployed it using Vercel. TODO: enhance the SEO of the project and add a intagram feed integration.`,
    learned: [
      "Learned about CSS animations and how to use them to create a more dynamic design",
      "Learned about image optimization and how to use it to improve the performance of the website using webp format",
      "Started to use Vercel for hosting my projects and how to use a custom domain with SSL",
    ],
    used_techs: [
      {
        name: "ReactJS",
        icon: <FaReact className="w-full h-full" />,
        used: "Front-end framework used to create the SPA",
      },
      {
        name: "Material UI",
        icon: <SiMaterialdesign className="w-full h-full" />,
        used: "Used for a base of all the components",
      },
      {
        name: "React Router",
        icon: <SiReactrouter className="w-full h-full" />,
        used: "Used to create all the routes and navigation  ",
      },
      {
        name: "Typescript",
        icon: <SiTypescript className="w-full h-full" />,
        used: "Used to add types to the project ",
      },
    ],
    exemple_img: landingPageImg,
  },
  {
    id: "4",
    date: "April 2024",
    title: "3D Calculator",
    previewLink: "https://three-js-3-d-calculator.vercel.app/",
    repoLink: "https://github.com/chicogborba/ThreeJS3DCalculator",
    main_ideia: `Well, one of the first projects I ever did with HTML, CSS and JS
    was a calculator. So I thought it would be cool to start learning ThreeJS by creating 
    a functional 3D calculator.`,
    execution: `Since I have no experience modeling 3D objects, I started by looking for an existing one and found a free calculator model on Polly.pizza by the user Bruno Oliveira. After that, I began to learn the basics of ThreeJS and how to import the model into the project. Once that was working and the model was being displayed correctly, I started developing a way to detect which object my mouse was hovering over and how to interact with it. I chose to use a ray casting algorithm that is already implemented in ThreeJS to detect the object and change its color when the mouse is hovering over it. After that, I created animations for the button clicks and to change the display of the calculator. Dynamically creating 3D text and adding it to the calculator proved to be a challenge and highly inefficient, so I decided to use a 2D canvas to dynamically create a texture that could be shown on the calculator display. With all of the basic functionalities working, I started to add features to the thermal printer and the paper roll, which can now even print the history of the calculator. When all was done, I added a simple introduction screen and deployed the project on Vercel.`,
    learned: [
      "Basic 3D modeling in Blender",
      "Basics of ThreeJS and WebGL",
      "Basics of ray casting and how to use it to detect objects in a 3D scene",
    ],
    used_techs: [
      {
        name: "TypeScript",
        icon: <SiTypescript className="w-full h-full" />,
        used: "Main language used in the project",
      },
      {
        name: "ThreeJS",
        icon: <IoCubeOutline className="w-full h-full" />,
        used: "Main library used in the project for 3D rendering with WebGL",
      },
      {
        name: "Blender",
        icon: <SiBlender className="w-full h-full" />,
        used: "Used to modify the 3D models",
      },
      {
        name: "TweenJs",
        icon: <MdOutlineAnimation className="w-full h-full" />,
        used: "Used to create the 3D animations",
      },
    ],
    exemple_img: CalculatorBanner,
  },
  {
    id: "3",
    date: "May 2024",
    title: "Wave Function Collapse",
    previewLink: "https://chicogborba.github.io/WaveFunctionCollapseJS/",
    repoLink: "https://github.com/chicogborba/WaveFunctionCollapseJS",
    main_ideia: `The initial idea was to build a version of the algorithm in pure JavaScript, HTML, and CSS based on the basic specification of the algorithm to create a more general execution of it. The final goal was to create a map generator that could always generate roads that connect.`,
    execution: `The Wave Function Collapse (WFC) algorithm begins with an empty grid, where each square can represent multiple possibilities. When a square is "observed," it collapses into a specific state, thereby constraining the options available for its neighboring squares based on predefined rules. The algorithm employs the concept of entropy to determine which cell to collapse first, imposing restrictions on adjacent cells until the entire grid is filled consistently.

This implementation was designed for user-friendly interaction, allowing users to click on squares to observe the algorithm in action. Once the core functionality was complete, I enhanced the HTML page with additional text and styling to create a more inviting and engaging user experience.

`,
    learned: [
      "Principles of the Wave Function Collapse algorithm",
      "Concepts of entropy and constraint propagation",
      "Implementation of procedural generation algorithms in JavaScript",
      "Information theory and its applications in computer science",
    ],
    used_techs: [
      {
        name: "JavaScript",
        icon: <IoLogoJavascript className="w-full h-full" />,
        used: "Main language used in the project implementation",
      },
      {
        name: "HTML",
        icon: <FaHtml5 className="w-full h-full" />,
        used: "Used to create the user interface",
      },
      {
        name: "CSS",
        icon: <IoLogoCss3 className="w-full h-full" />,
        used: "Used to create the styles of the user interface",
      },
    ],
    exemple_img: WFCMain,
  },
  {
    id: "5",
    date: "2024",
    title: "Hackathon AGES 2024",
    main_ideia: `This project was developed during the Hackathon 2024 AGES PUCRS, where the central proposal was to create an innovative application that automates the planning of routes for autonomous drone flights, while integrating an advanced image recognition system to identify victims in emergency situations.`,
    execution: `Given the theme "Technology in Disasters," our team designed an intuitive interface using the Leaflet library in React, enabling the creation of interactive maps and efficient route management. For the image recognition component, we utilized Python and the OpenCV library, allowing the application to automatically detect victims in critical scenarios. Additionally, we learned to use an AWS S3 bucket for storing images, which enhanced the application's functionality and scalability. The solution was crafted in less than 24h and was designed to facilitate user interaction and optimize disaster response processes.`,
    learned: [
      "Development of autonomous route for drones",
      "Application of interactive mapping with Leaflet",
      "Implementation of image recognition systems using OpenCV.",
      "Utilization of AWS S3 for image storage.",
      "Team collaboration in a competitive programming environment, enhancing teamwork skills.",
    ],
    used_techs: [
      {
        name: "React",
        icon: <FaReact className="w-full h-full" />,
        used: "The main framework used to build the user interface, providing an interactive experience.",
      },
      {
        name: "Leaflet",
        icon: <SiLeaflet className="w-full h-full" />,
        used: "The library employed to create interactive maps, facilitating route planning.",
      },
      {
        name: "Python",
        icon: <FaPython className="w-full h-full" />,
        used: "The language chosen for implementing image recognition, ensuring efficient processing.",
      },
      {
        name: "OpenCV",
        icon: <SiOpencv className="w-full h-full" />,
        used: "The library used for image processing and automatic victim identification.",
      },
      {
        name: "AWS S3",
        icon: <FaAws className="w-full h-full" />,
        used: "Used for storing images securely and efficiently.",
      },
    ],
    exemple_img: ESMain,
  },
];

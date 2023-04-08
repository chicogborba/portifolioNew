import portfolio_img from "../../assets/pictures/portfolio_img.webp";
import landingPageImg from "../../assets/pictures/landingPage.webp";
import CAHImg from "../../assets/pictures/CAH.webp";
import { FaCss3Alt, FaReact } from "react-icons/fa";
import { SiJavascript, SiMaterialdesign, SiTypescript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiSocketdotio } from "react-icons/si";
import { SiReactrouter } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";

export type UsedTech = {
  name: string;
  icon: JSX.Element;
  used: string;
};

export type ProjectData = {
  id: string;
  date: string;
  title: string;
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
    id: "3",
    date: "April 2023",
    title: "Card Game",
    main_ideia: `A simple card game based on the popular "Cards Against Humanity" game.
    The main objective was to study the basics of NodeJS and Socket.io and the problems that
    arise when creating a multiplayer game.`,
    execution: `
    *PROJECT IN PROGRESS*
    To begin this project, I started by getting the cards data from the Cards Against Humanity free PDF.
    After that, I created the game logic using just JS, HTML and CSS to keep the project simple.
    And now I'm working on the multiplayer using NodeJS and Socket.io.`,
    learned: ["First time using NodeJS and Socket.io"],
    used_techs: [
      {
        name: "JavaScript",
        icon: <SiJavascript className="w-full h-full" />,
        used: "Used to create the game logic",
      },
      {
        name: "CSS",
        icon: <FaCss3Alt className="w-full h-full" />,
        used: "Used to create the styles",
      },
      {
        name: "NodeJS",
        icon: <IoLogoNodejs className="w-full h-full" />,
        used: "Used as the server for multiplayer",
      },
      {
        name: "Socket.io",
        icon: <SiSocketdotio className="w-full h-full" />,
        used: "Used to create real-time communication between client and server",
      },
    ],
    exemple_img: CAHImg,
  },
];

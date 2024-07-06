import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { ListOfTechs } from "./Techs";
import { SiTailwindcss } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { SiStorybook } from "react-icons/si";
import { SiMaterialui } from "react-icons/si";
import { TbBrandPython } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { IoCubeOutline } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import cLangIcon from "../../../../assets/c-lang.svg";

export const list_of_techs: ListOfTechs = [
  {
    name: "React",
    text: `
      A JavaScript library for building user interfaces. React allows developers to create reusable UI components and manage the state of their application.`,
    icon: <FaReact className="w-full h-full" />,
    bg_color: "bg-[#7FEDE6]",
    id: 1,
  },
  {
    name: "Typescript",
    text: `
      A superset of JavaScript that adds optional static typing, allowing developers to catch errors earlier in the development process and write more maintainable code.`,
    icon: <SiTypescript className="w-full h-full" />,
    bg_color: "bg-[#6B98CD]",
    id: 2,
  },
  {
    name: "Tailwind",
    text: `
      A web-based platform for version control and collaboration. It allows developers to host and review code, manage projects, and build software alongside millions of other developers.
`,
    icon: <SiTailwindcss className="w-full h-full" />,
    bg_color: "bg-[#71CEFA]",
    id: 3,
  },
  {
    name: "Git",
    text: `
A CSS framework that provides utility classes for building custom user interfaces quickly and efficiently. With Tailwind, developers can focus on writing HTML and let the framework handle the styling.
`,
    icon: <BsGithub className="w-full h-full" />,
    bg_color: "bg-[#B7BBBD]",
    id: 4,
  },
  {
    name: "Storybook",
    text: `
      Storybook is a tool for developing and testing UI components in isolation.
      It provides a sandbox environment for building, documenting, and testing
      components independently of the larger application. 
`,
    icon: <SiStorybook className="w-full h-full" />,
    bg_color: "bg-[#F678A1]",
    id: 5,
  },

  {
    name: "MUI",
    text: `
      Material-UI is a component library that provides pre-designed UI components 
      following Google's Material Design guidelines for creating responsive and
      professional-looking interfaces. It includes theming and customization features.
`,
    icon: <SiMaterialui className="w-full h-full" />,
    bg_color: "bg-[#5D9DF5]",
    id: 6,
  },
  {
    name: "NodeJS",
    text: `
      Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.
      It allows developers to write server-side code in JavaScript and build
      scalable network applications quickly and efficiently.
`,
    icon: <FaNodeJs className="w-full h-full" />,
    bg_color: "bg-[#80D2E5]",
    id: 7,
  },
  {
    name: "MongoDB",
    text: `
      MongoDB is a NoSQL database that stores data in flexible, JSON-like documents.
      It's widely used for building scalable, high-performance applications and
      offers features like sharding, replication, and indexing.
`,
    icon: <SiMongodb className="w-full h-full" />,
    bg_color: "bg-[#8ff0a6]",
    id: 8,
  },
  {
    name: "C Language",
    text: `
      C is a general-purpose programming language known for its efficiency, speed,
      and low-level control over hardware. It's widely used for system programming,
      embedded systems, and developing operating systems.
`,
    icon: <img src={cLangIcon} className=" w-full h-full" />,
    bg_color: "bg-[#9f8ff0]",
    id: 8,
  },
  {
    name: "Java",
    text: `
      Java is a class-based, object-oriented programming language that's designed to
      have as few implementation dependencies as possible. It's widely used for
      building enterprise applications, mobile apps, and web services.
`,
    icon: <FaJava className="w-full h-full" />,
    bg_color: "bg-[#f69178]",
    id: 9,
  },
  {
    name: "Spring Boot",
    text: `
      Spring Boot is an open-source Java-based framework used for building
      stand-alone, production-ready Spring applications. It simplifies the
      development process by providing default configurations and boilerplate code.
`,
    icon: <SiSpringboot className="w-full h-full" />,
    bg_color: "bg-[#9ef678]",
    id: 10,
  },
  {
    name: "Python",
    text: `
      Python is a popular high-level programming language known for its simplicity,
      readability, and versatility. It's widely used for web development, data analysis,
      machine learning, and more, and offers a large standard library.
`,
    icon: <TbBrandPython className="w-full h-full" />,
    bg_color: "bg-[#F0D48F]",
    id: 8,
  },
];

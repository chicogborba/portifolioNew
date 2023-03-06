import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { ListOfTechs } from "./Techs";
import { SiTailwindcss } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { SiStorybook } from "react-icons/si";
import { SiMaterialui } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { TbBrandPython } from "react-icons/tb";

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
    name: "NextJS",
    text: `
      Next.js is a framework for building server-side rendered React apps.
      It includes features for optimized performance, easy deployment, and static 
      site generation, enabling developers to build modern web applications with ease.
`,
    icon: <TbBrandNextjs className="w-full h-full" />,
    bg_color: "bg-[#80D2E5]",
    id: 7,
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
    id: 7,
  },
];

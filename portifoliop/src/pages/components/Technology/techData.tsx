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
      React is a declarative, efficient, and flexible JavaScript library
      for building user interfaces. It lets you compose complex UIs from
      small and isolated pieces of code called “components”.`,
    icon: <FaReact className="w-36 h-36 mb-4 mt-8" />,
    color: "blue",
    id: 1,
  },
  {
    name: "Typescript",
    text: `
      TypeScript is a versatile, efficient, and flexible superset of JavaScript
      that enables developers to build sophisticated and robust user interfaces.
      By adding optional static typing and advanced features to JavaScript`,
    icon: <SiTypescript className="w-28 h-28 mb-6 mt-10" />,
    color: "darkBlue",
    id: 2,
  },
  {
    name: "TailwindCSS",
    text: `
      Tailwind CSS is a popular CSS framework with pre-designed classes for
      building responsive interfaces. It reduces CSS code by providing flexible,
      low-level utility classes and includes responsive design options.
`,
    icon: <SiTailwindcss className="w-28 h-28 mb-6 mt-10" />,
    color: "blue",
    id: 3,
  },
  {
    name: "Git",
    text: `
      Git is a version control system for tracking code changes over time,
      allowing multiple developers to work on the same codebase and merge changes.
      It includes features for collaborating, reverting changes, and reviewing history.
`,
    icon: <BsGithub className="w-36 h-36 mb-4 mt-8" />,
    color: "blue",
    id: 4,
  },
  {
    name: "Storybook",
    text: `
      Storybook is a tool for developing and testing UI components in isolation.
      It provides a sandbox environment for building, documenting, and testing
      components independently of the larger application. 
`,
    icon: <SiStorybook className="w-36 h-36 mb-4 mt-8" />,
    color: "blue",
    id: 5,
  },
  {
    name: "Material-UI",
    text: `
      Material-UI is a component library that provides pre-designed UI components 
      following Google's Material Design guidelines for creating responsive and
      professional-looking interfaces. It includes theming and customization features.
`,
    icon: <SiMaterialui className="w-36 h-36 mb-4 mt-8" />,
    color: "blue",
    id: 6,
  },
  {
    name: "NextJS",
    text: `
      Next.js is a framework for building server-side rendered React apps.
      It includes features for optimized performance, easy deployment, and static 
      site generation, enabling developers to build modern web applications with ease.
`,
    icon: <TbBrandNextjs className="w-48 h-48 mb-2 mt-6" />,
    color: "blue",
    id: 7,
  },
  {
    name: "Python",
    text: `
      Python is a popular high-level programming language known for its simplicity,
      readability, and versatility. It's widely used for web development, data analysis,
      machine learning, and more, and offers a large standard library.
`,
    icon: <TbBrandPython className="w-48 h-48 mb-2 mt-6" />,
    color: "blue",
    id: 7,
  },
];

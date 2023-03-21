import portfolio_img from "../../assets/pictures/portfolio_img.webp";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { SiReactrouter } from "react-icons/si";

export type UsedTech = {
  name: string;
  icon: JSX.Element;
  used: string;
};

export type ProjectData = {
  id: string;
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
    title: "Portifolio",
    main_ideia:
      "A simple portifolio on a neubrutalist web design. Using  ReactJS and Tailwind",
    execution: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in scelerisque justo. 

Integer scelerisque, lacus et lobortis lobortis, augue nisi pharetra sem, sed lacinia mi orci nec risus. Aenean nec dignissim ex.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in scelerisque justo. 

Integer scelerisque, lacus et lobortis lobortis, augue nisi pharetra sem, sed lacinia mi orci nec risus. Aenean nec dignissim ex.`,
    learned: [
      "learned how to use tailwind",
      "learned how to use react",
      "learned how to use typescript",
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
        used: "Used to add types to the project",
      },
    ],
    exemple_img: portfolio_img,
  },
];

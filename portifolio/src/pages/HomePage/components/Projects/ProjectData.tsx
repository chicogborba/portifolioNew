import { RxDiscordLogo } from "react-icons/rx";
import { TbRobot } from "react-icons/tb";
import { TiShoppingCart } from "react-icons/ti";
import { RiPencilRuler2Line } from "react-icons/ri";
import { IoIosGlobe } from "react-icons/io";
import { BiRocket } from "react-icons/bi";

export const projectData = [
  {
    name: "Discord Bot",
    icon: <RxDiscordLogo className="w-full h-full" />,
    bg_color: "bg-[#D6F57B]",
  },
  {
    name: "Chat Bot",
    icon: <TbRobot className="w-full h-full" />,
    bg_color: "bg-[#7BF5BB]",
  },
  {
    name: "E-commerce",
    icon: <TiShoppingCart className="w-full h-full" />,
    bg_color: "bg-[#7BDFF5]",
  },
  {
    name: "Backend API",
    icon: <RiPencilRuler2Line className="w-full h-full" />,
    bg_color: "bg-[#D6F57B]",
  },
  {
    name: "Landing Page",
    icon: <IoIosGlobe className="w-full h-full" />,
    bg_color: "bg-[#7BF5BB]",
  },
  {
    name: "Web-Scrapper",
    icon: <BiRocket className="w-full h-full" />,
    bg_color: "bg-[#7BDFF5]",
  },
];

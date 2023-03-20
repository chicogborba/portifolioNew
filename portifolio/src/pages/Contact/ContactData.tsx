import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";
import { MdOutlineMailOutline } from "react-icons/md";
export const contactData = [
  {
    name: "WhatsApp",
    icon: <BsWhatsapp className="h-36 w-auto" />,
    color: "bg-[#A1EFC0]",
    onClick: () => {
      window.open("https://wa.me/5551985251091");
    },
  },
  {
    name: "LinkedIn",
    icon: <AiOutlineLinkedin className="h-36 w-auto" />,
    color: "bg-[#A1C5EF]",
    onClick: () => {
      window.open(
        "https://www.linkedin.com/in/francisco-borba-677912248/",
        "_blank"
      );
    },
  },
  {
    name: "E-Mail",
    icon: <MdOutlineMailOutline className="h-36 w-auto" />,
    color: "bg-[#DBA1EF]",
    onClick: () => {
      window.open("mailto:f.grudzinski@edu.pucrs.br");
    },
  },
];

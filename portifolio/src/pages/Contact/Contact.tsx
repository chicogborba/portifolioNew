import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import TitleOutlined from "../../components/TitleOutlined";
import ColorCard from "./Components/ColorCard";
import { contactData } from "./ContactData";

const Contact = () => {
  return (
    <div
      className="
        flex flex-col gap-20
        items-center
        h-auto
        min-h-[92vh]
        bg-[#22F2FF]
        p-16"
    >
      <TitleOutlined text="How to Reach Me?" color="salmon" />
      <div className="flex flex-wrap gap-12 justify-center">
        {contactData.map((item, index) => (
          <ColorCard
            key={index}
            text={item.name}
            icon={item.icon}
            color={item.color}
            onClick={item.onClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Contact;

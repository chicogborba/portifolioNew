import React, { memo, useEffect } from "react";

const Techs = () => {
  const list_of_techs = [
    {
      name: "React",
      id: 1,
    },
    {
      name: "Next.js",
      id: 2,
    },
    {
      name: "TailwindCSS",
      id: 3,
    },
    {
      name: "TypeScript",
      id: 4,
    },
    {
      name: "JavaScript",
      id: 5,
    },
  ];

  const [selectedTech, setselectedTech] = React.useState(1);
  const [previusTech, setpreviusTech] = React.useState(2);

  //find selected tech name
  const selected_tech = list_of_techs.find((tech) => tech.id == selectedTech);
  const previus_techName = list_of_techs.find((tech) => tech.id == previusTech);

  const onTechCardClick = () => {
    setpreviusTech(selectedTech);
    if (selectedTech < list_of_techs.length) {
      setselectedTech((prev) => (prev = prev + 1));
    } else {
      setselectedTech(1);
    }
    // add animation to the selected card
    const first_card = document.getElementById("front-card");
    first_card?.classList.add("animate-change-card");

    const second_card = document.getElementById("second-card");
    second_card?.classList.add("animate-elevate-card");
  };

  return (
    <div
      className="flex justify-center flex-row
     bg-[#22FFA2] w-screen h-auto 
     p-16 border-b-[6px] border-black"
    >
      teste
    </div>
  );
};

export default memo(Techs);

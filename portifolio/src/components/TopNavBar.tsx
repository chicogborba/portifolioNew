import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { TbTool } from "react-icons/tb";
import { HiOutlineHome } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
const TopNavBar = () => {
  const navigate = useNavigate();

  return (
    <div
      className="h-14 bg-[#F5E27B] sticky top-0 z-50 border-b-4 border-black
    flex items-center justify-center"
    >
      <div
        onClick={() => navigate("/")}
        className="flex gap-4 justify-center items-center hover:text-white hover:cursor-pointer transition-all"
      >
        <BiPhoneCall className="h-10 w-10" />
        <p className=" font-Jakarta text-xl">Contact me</p>
      </div>
      <div className="border rounded-full border-black h-6 mx-8" />
      <div
        onClick={() => navigate("/")}
        className="flex gap-4 justify-center items-center hover:text-white hover:cursor-pointer transition-all"
      >
        <TbTool className="h-10 w-10" />
        <p className=" font-Jakarta text-xl">Projects</p>
      </div>
      <div className="border rounded-full border-black h-6 mx-8" />
      <div
        onClick={() => navigate("/")}
        className="flex gap-4 justify-center items-center hover:text-white hover:cursor-pointer transition-all"
      >
        <HiOutlineHome className="h-10 w-10" />
        <p className=" font-Jakarta text-xl">Home</p>
      </div>
    </div>
  );
};

export default TopNavBar;

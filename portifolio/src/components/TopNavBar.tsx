import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";
import { HiOutlineHome } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
const TopNavBar = () => {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/");
  };

  const navigateContact = () => {
    navigate("/contact");
  };

  const openGithub = () => {
    window.open("https://github.com/chicogborba", "_blank");
  };

  return (
    <div
      className="h-16 bg-[#F5E27B] sticky top-0 z-50 border-b-4 border-black
    flex items-center justify-center"
    >
      <div
        onClick={navigateContact}
        className="flex sm:gap-4 gap-1 justify-center items-center hover:text-white hover:cursor-pointer transition-all"
      >
        <BiPhoneCall className="sm:h-10 sm:w-10 w-6 h-6" />
        <p className=" font-Jakarta sm:text-xl text-base">Contact me</p>
      </div>
      <div className="border rounded-full border-black h-6 sm:mx-8 mx-3" />
      <div
        onClick={openGithub}
        className="flex sm:gap-4 gap-1 justify-center items-center hover:text-white hover:cursor-pointer transition-all"
      >
        <FiGithub className="sm:h-8 sm:w-8 w-4 h-4" />
        <p className=" font-Jakarta sm:text-xl text-base">GitHub</p>
      </div>
      <div className="border rounded-full border-black h-6 sm:mx-8 mx-3" />
      <div
        onClick={navigateHome}
        className="flex sm:gap-4 gap-1 justify-center items-center hover:text-white hover:cursor-pointer transition-all"
      >
        <HiOutlineHome className="sm:h-10 sm:w-10 w-6 h-6" />
        <p className=" font-Jakarta sm:text-xl text-base">Home</p>
      </div>
    </div>
  );
};

export default TopNavBar;

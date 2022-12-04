import React from "react";
import {
  AiFillHome,
  AiOutlineUser,
  AiOutlinePieChart,
  AiOutlineMail,
} from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { IoExitOutline } from "react-icons/io5";

const LeftSide = () => {
  return (
    <div className="sticky top-0 hidden h-screen lg:flex flex-col justify-center item-center w-[10rem] bg-[#292c2d]  ">
      <ul className="space-y-11 text-gray-400">
        <li className="flex justify-center">
          <AiFillHome className="text-[50px] hover:bg-[#4d5051] p-[0.4rem] rounded-[0.9rem] " />
        </li>
        <li className="flex justify-center">
          <AiOutlineUser className="text-[50px] hover:bg-[#4d5051] p-[0.4rem] rounded-[0.9rem] " />
        </li>
        <li className="flex justify-center">
          <AiOutlinePieChart className="text-[50px] hover:bg-[#4d5051] p-[0.4rem] rounded-[0.9rem] " />
        </li>
        <li className="flex justify-center">
          <AiOutlineMail className="text-[50px] hover:bg-[#4d5051] p-[0.4rem] rounded-[0.9rem] " />
        </li>
        <li className="flex justify-center">
          <FiSettings className="text-[50px] hover:bg-[#4d5051] p-[0.4rem] rounded-[0.9rem] " />
        </li>
        <li className="flex justify-center">
          <IoExitOutline className="text-[50px] hover:bg-[#4d5051] p-[0.4rem] rounded-[0.9rem] " />
        </li>
      </ul>
    </div>
  );
};

export default LeftSide;

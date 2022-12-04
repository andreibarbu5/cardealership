import React from "react";
import { AiFillStar } from "react-icons/ai";
const CarCard = ({ title, image, type }) => {
  return (
    <div className="mx-auto bg-[#242529] rounded-[1rem]">
      <div className="w-[12rem] h-[10rem] 2xl:w-[14.5rem] 2xl:h-[13.5rem] flex">
        <img
          src={image}
          alt=""
          className="object-cover w-full h-full rounded-[1rem]"
        />
      </div>
      <div className=" px-3 pt-2">
        <p className="text-white">{title}</p>
        <div className="pb-4 flex items-center w-full justify-between">
          <p className="text-blue-300  text-[14px]">{type}</p>
          <div className="flex items-center gap-[0.15rem]">
            <AiFillStar className="text-[#eda535] text-[13px] mt-[2px]" />
            <p className="text-white  text-[13px]">5.0</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;

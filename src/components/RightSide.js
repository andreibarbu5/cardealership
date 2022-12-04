import React from "react";
import amg from "../assets/cropamg.png";

const RightSide = () => {
  return (
    <div className="hidden xl:flex bg-[#1d1e22]   w-full   max-w-[20rem] 2xl:max-w-[23.5rem] xxl:max-w-[34rem] h-screen sticky top-0 pt-8">
      <div className="bg-[#242529] w-full m-6 rounded-[2rem] ">
        <div className="relative bg-white h-[15rem] 2xl:h-[20rem] w-full  flex   rounded-[2rem]   items-center overflow-hidden">
          <img
            src={amg}
            alt=""
            className="absolute object-cover w-full -right-8 scale-125 2xl:scale-100"
          />
        </div>
        <div className="px-3 pt-6">
          {/* Title */}
          <div className="">
            <p className="text-white text-[32px]">Mercedes Amg</p>
            <p className="text-blue-300  text-[22px]">Gasoline</p>
          </div>
          {/* Specs */}
          <div className="flex justify-between flex-wrap px-3 gap-y-2 pt-4 xxl:pt-12 ">
            <div className="bg-[#4f5151] max-w-[7rem] rounded-[1rem] p-2 xxl:scale-110">
              <p className="text-white">396 mi</p>
              <p className="text-gray-400 text-[13px]">Range [EPA est.]</p>
            </div>
            <div className="bg-[#4f5151] max-w-[7rem] rounded-[1rem] p-2 xxl:scale-110">
              <p className="text-white">396 mi</p>
              <p className="text-gray-400 text-[13px]">Range [EPA est.]</p>
            </div>
            <div className="bg-[#4f5151] max-w-[7rem] rounded-[1rem] p-2 xxl:scale-110">
              <p className="text-white">396 mi</p>
              <p className="text-gray-400 text-[13px]">Range [EPA est.]</p>
            </div>
          </div>
          {/* Description */}
          <div className="text-gray-300 pt-12 text-[20px] pr-12 hidden xxl:flex">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
              aspernatur deleniti, fugit voluptatibus eum voluptates porro,
              doloremque iusto voluptatem facilis dolor distinctio. A,
              aspernatur deleniti, fugit voluptatibus eum voluptates.
            </p>
          </div>

          {/* Take Action */}
          <div className="xxl:flex items-end justify-between mx-[1rem]">
            <div className="pt-8 scale-110">
              <p className="text-gray-400 font-semibold text-[20px]">Price</p>
              <p className="text-white font-semibold text-[30px] -mt-2">
                $ 68 900
              </p>
            </div>
            <div className="bg-[#e3ff32]  w-[6rem]  mb-2 rounded-full text-center py-1.5 font-semibold scale-125   mt-4">
              <p>BUY</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;

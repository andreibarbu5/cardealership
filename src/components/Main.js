import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import amg from "../assets/car.jpg";
import rs7 from "../assets/rs7.jpg";
import amg1 from "../assets/amg.avif";
import camaro from "../assets/chevy.jpg";
import CarCard from "./CarCard";

const cars = [
  { title: "Audi RS7 Stock", image: rs7, type: "Gasoline" },
  { title: "Mercedes AMG 2019", image: amg1, type: "Gasoline" },
  { title: "Chevrolet Camaro", image: camaro, type: "Gasoline" },
  { title: "Audi RS7 Stock", image: rs7, type: "Gasoline" },
  { title: "Mercedes AMG 2019", image: amg1, type: "Gasoline" },
  { title: "Chevrolet Camaro", image: camaro, type: "Gasoline" },
  { title: "Audi RS7 Stock", image: rs7, type: "Gasoline" },
  { title: "Mercedes AMG 2019", image: amg1, type: "Gasoline" },
  { title: "Chevrolet Camaro", image: camaro, type: "Gasoline" },
];
const Main = () => {
  return (
    <div className="bg-[#1d1e22] w-full   px-4 py-8   ">
      <div className="  mx-auto overflow-hidden">
        {/* Title */}
        <p className="text-[28px] text-white font-semibold ">
          Find your perfect car
        </p>
        {/* Categories */}
        <div className="">
          <ul className="flex items-center gap-3 pt-6">
            <li className="navbtn2">
              <p>All Cars</p>
            </li>
            <li className="navbtn  ">
              <p>Electric</p>
            </li>
            <li className="navbtn ">
              <p>Gasoline</p>
            </li>
            <li className="navbtn ">
              <p>Hybrids</p>
            </li>
            <li className="bg-white rounded-full p-2 cursor-pointer">
              <AiOutlinePlus />
            </li>
          </ul>
        </div>
        {/* Hero */}
        <div className="relative  mt-4 flex overflow-hidden h-[17.5rem] sm:h-[22rem] md:h-[25rem]  lg:h-[30rem]">
          <div className="absolute h-full w-full object-cover">
            <img src={amg} alt="" className="rounded-[2rem] w-full h-full" />
          </div>
          <div className="absolute h-full w-full object-cover bg-black/10 rounded-[2rem]"></div>
          <div className="relative z-10 pl-6">
            <p className="text-white font-semibold text-[23px]  pt-8">
              Top Safety Pick
            </p>
            <p className="text-white text-[18px] pt-3">Awarded the most 2021</p>
            <p className="text-white text-[16px]">IIHS TOP SAFETY PICK+</p>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mt-8 gap-y-4 sm:gap-6">
          {cars.map((car) => (
            <CarCard title={car.title} image={car.image} type={car.type} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;

import React from "react";
import { data } from "../Data/Home";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const FeaturedServices = () => {
  return (
    <>
      {data.map((item, key) => {
        return (
          <div className="cursor-pointer relative hover:bg-red-400 hover:text-white p-6 bg-white w-[18.5%] rounded-lg shadow-md flex justify-center items-center flex-col">
            <div className="flex items-center justify-center w-20 h-20 bg-red-200 rounded-full">
              <img
                className="w-8 h-8 text-white"
                src={item.imgData}
                alt="logo"
              />
            </div>
            <h3 className="mt-4 text-xl font-semibold">{item.heading}</h3>
            <h6 className="mt-2 mb-12 text-gray-600">{item.desc}</h6>
            <button className="absolute bottom-[-25px] left-[41%] flex justify-center items-center text-3xl  px-4 py-4 bg-red-500 text-white rounded-full">
              <ArrowForwardIosIcon />
            </button>
          </div>
        );
      })}
    </>
  );
};

export default FeaturedServices;

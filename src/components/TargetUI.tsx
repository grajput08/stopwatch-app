import React from "react";

const TargetUI = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="relative flex justify-center items-center w-48 h-48">
        <div className="absolute w-40 h-40 border-8 border-[#c19a6b] rounded-full"></div>
        <div className="absolute w-32 h-32 border-8 border-[#c19a6b] rounded-full"></div>
        <div className="absolute w-24 h-24 border-8 border-[#c19a6b] rounded-full"></div>
        <div className="absolute w-16 h-16 border-8 border-[#c19a6b] rounded-full"></div>
        <div className="absolute w-8 h-8 bg-[#c19a6b] rounded-full"></div>
      </div>
    </div>
  );
};

export default TargetUI;

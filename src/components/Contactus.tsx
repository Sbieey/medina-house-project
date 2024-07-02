import React from "react";
import img from "../assets/mainBg.png";

export const Contactus = () => {
  return (
    <>
      <div
        id="CONTACT US"
        className="h-auto flex mb-10 justify-center w-full lg:w-[99%] bg-cover"
        style={{ background: `url(${img})` }}
      >
        <div className="bg-[#019147] px-[10px] w-full lg:w-[95%] gap-[20px] flex flex-col min-h-screen pt-16 pb-20 lg:pb-28 rounded-3xl">
          <text className="text-[#FFFFFF] text-center mb-[30px] lg:mb-[50px] text-3xl lg:text-4xl font-bold">
            Contact Us
          </text>

          <div className="flex flex-col lg:flex-row gap-[20px] justify-center">
            <input
              type="text"
              placeholder="NAME"
              className="form-control bg-[#004E26] rounded-3xl p-4 lg:p-6 w-full lg:w-[500px]"
            />
            <input
              type="text"
              placeholder="Email Address"
              className="form-control bg-[#004E26] rounded-3xl p-4 lg:p-6 w-full lg:w-[500px]"
            />
          </div>
          <div className="flex justify-center mt-6 lg:mt-8">
            <textarea className="w-full bg-[#004E26] lg:w-[100%] h-[200px] lg:mx-[50px] lg:h-[400px] rounded-3xl p-4 lg:p-6" placeholder="Type Your Message Here..."></textarea>
          </div>
          <div className="flex justify-center md:justify-end lg:me-14 mt-6 lg:mt-8">
            <button
              type="button"
              className="bg-[#D3C00D] w-[240px] rounded-2xl p-3 lg:p-4 text-white text-xl tracking-wider"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

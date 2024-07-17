import React from "react";

function Hero() {
  return (
    <div className="flex flex-col-reverse sm:flex-row mx-auto max-w-[1280px] items-center h-[80vh]">
      <div className="text">
        <h1 className="font-bold text-[8vw] leading-none tracking-tight text-center sm:text-left ">
          YOUR FEET DESERVE <br /> THE BEST
        </h1>
        <p className="w-full text-center sm:w-1/2 mt-3 justify sm:text-[1vw] text-sm p-2">
          YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES.
          YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES.
        </p>
        <div className="mt-3 flex items-center gap-10 justify-center">
          <button className="bg-red-600 text-white px-5 py-2 rounded-md">
            Shop Now
          </button>
          <button className="bg-red-600 text-white px-5 py-2 rounded-md">
            Category
          </button>
        </div>
        <div>
          <p className="my-3 text-center sm:text-left">Also Available on</p>
        </div>
        <div className="flex items-center gap-10 justify-center sm:justify-start">
          <img src="/amazon.png" alt="" />
          <img src="/flipkart.png" alt="" />
        </div>
      </div>
      <div className="">
        <img className="" src="/hero-image.png" alt="" />
      </div>
    </div>
  );
}

export default Hero;

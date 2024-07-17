import React from "react";

function Hero() {
  return (
    <div className="flex mx-auto max-w-[1280px] items-center h-[90vh]">
      <div className="text">
        <h1 className="font-bold text-[8vw] leading-none tracking-tight">
          YOUR FEET DESERVE <br /> THE BEST
        </h1>
        <p className="w-1/2 mt-3 text-justify text-[1vw]">
          YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES.
          YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES.
        </p>
        <div className="mt-3 flex items-center gap-10">
          <button className="bg-red-600 text-white px-5 py-2 rounded-md">Shop Now</button>
          <button className="bg-red-600 text-white px-5 py-2 rounded-md">Category</button>
        </div>
        <div>
          <p className="my-3">Also Available on</p>
        </div>
        <div className="flex items-center gap-10">
          <img src="../../public/amazon.png" alt="" />
          <img src="../../public/flipkart.png" alt="" />
        </div>
      </div>
      <div className="image">
        <img src="../../public/hero-image.png" alt="" />
      </div>
    </div>
  );
}

export default Hero;

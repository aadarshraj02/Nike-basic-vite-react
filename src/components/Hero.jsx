import React from "react";

function Hero() {
  return (
    <div>
      <div className="text">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES.
          YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES.
        </p>
        <div className="buttons">
          <button>Shop Now</button>
          <button>Category</button>
        </div>
        <div>
          <p>Also Available on</p>
        </div>
        <div>
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

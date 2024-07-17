import React from "react";

function App() {
  return (
    <div>
      <nav className="flex items-center justify-between max-h-[72px] max-w-[1280px] mx-auto ">
        <div className="logo">
          <img src="../public/brand_logo.png" alt="" />
        </div>
        <ul className="flex gap-10 items-center">
          <li>Menu</li>
          <li>Location</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <button className="bg-red-600 text-white px-5 py-2 rounded-md hover:opacity-80">
          Login
        </button>
      </nav>
    </div>
  );
}

export default App;

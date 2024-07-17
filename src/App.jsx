import React from "react";

function App() {
  return (
    <div>
      <nav className="flex items center justify-between max-h-[72px] max-w-[1280px] mx-auto bg-red-500">
        <div className="logo">
          <img src="../public/brand_logo.png" alt="" />
        </div>
        <ul className="flex gap-10 items-center">
          <li>Menu</li>
          <li>Location</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <button className="bg-red-600">Login</button>
      </nav>
    </div>
  );
}

export default App;

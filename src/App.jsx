import React from "react";

function App() {
  return (
    <div>
      <nav className="flex items center justify-between px-10 py-4">
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

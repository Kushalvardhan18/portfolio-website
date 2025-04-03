import React from "react";
import logo from "../assets/logo.png";
function Header() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <img src={logo} alt="logo" width={400} />
      </div>
      <div className="flex gap-5 mx-10">
        <nav className="cursor-pointer">Home</nav>
        <nav className="cursor-pointer">About</nav>
        <nav className="cursor-pointer">Contact</nav>
        <nav className="cursor-pointer">HireMe</nav>
        <nav className="cursor-pointer">Projects</nav>
      </div>
    </div>
  );
}

export default Header;

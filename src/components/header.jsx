import React from "react";
import logo from "../assets/logo.png";
function Header() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <img src={logo} alt="logo" width={400} />
      </div>
      <div className="flex gap-5 mx-10">
        <nav className="cursor-pointer hover:text-fuchsia-500">Home</nav>
        <nav className="cursor-pointer hover:text-fuchsia-500" >About</nav>
        <nav className="cursor-pointer hover:text-fuchsia-500">Contact</nav>
        <nav className="cursor-pointer hover:text-fuchsia-500">HireMe</nav>
        <nav className="cursor-pointer hover:text-fuchsia-500">Projects</nav>
      </div>
    </div>
  );
}

export default Header;

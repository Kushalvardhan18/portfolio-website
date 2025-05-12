import React from "react";
import logo from "../assets/logo.png";
import  {useLocation}  from 'react-router-dom';
import { NavLink } from "react-router-dom";

function Header() {
  let location = useLocation()
  console.log(location);
  
  return (
    <div className="flex items-center justify-between">
      <div>
        <img src={logo} alt="logo" width={400} />
      </div>
      <nav>
        <ul className="flex gap-5 mx-10">
          <li className="cursor-pointer hover:text-fuchsia-500">
            <NavLink to="/">Home </NavLink>
          </li>
          <li className="cursor-pointer hover:text-fuchsia-500">
            <NavLink to="/about">About </NavLink>
          </li>
          <li className="cursor-pointer hover:text-fuchsia-500">
            <NavLink to="/contact">Contact </NavLink>
          </li>
          <li className="cursor-pointer hover:text-fuchsia-500">
            <NavLink to="/hireme">HireMe </NavLink>
          </li>
          <li className="cursor-pointer hover:text-fuchsia-500">
            <NavLink to="/projects">Projects </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;

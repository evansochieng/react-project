import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <NavLink to="/signin">Sign In</NavLink>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/createresume">Create Resume</NavLink>
      <NavLink to="/signout">Sign Out</NavLink>
    </div>
  );
}

export default NavBar;

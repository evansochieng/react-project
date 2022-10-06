import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "rgb(12 74 110)",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
  return (
    <div
      style={{
        background: "rgb(6 182 212)",
        width: "1000px",
        textAlign: "center",
      }}
    >
      <NavLink to="/signin" exact="true" style={linkStyles}>
        Sign In
      </NavLink>
      <NavLink to="/" exact="true" style={linkStyles}>
        Home
      </NavLink>
      <NavLink to="/createresume" exact="true" style={linkStyles}>
        Create Resume
      </NavLink>
      <NavLink to="/signout" exact="true" style={linkStyles}>
        Sign Out
      </NavLink>
    </div>
  );
}

export default NavBar;

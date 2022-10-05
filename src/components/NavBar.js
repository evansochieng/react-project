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
    <div style={{ background: "rgb(6 182 212)", width: '1000px', textAlign: 'center'}}>
      <NavLink
        to="/signin"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Sign In
      </NavLink>
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/createresume"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Create Resume
      </NavLink>
      <NavLink
        to="/signout"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Sign Out
      </NavLink>
    </div>
  );
}

export default NavBar;

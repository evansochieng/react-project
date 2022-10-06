import React from "react";
import { useNavigate } from "react-router-dom";

function SignOut() {
  // Define navigate to assist go back to login on logout
  const navigate = useNavigate();

  //Log out user, redirect to login
  function logout(){
    navigate("/signin");
  }
  return (
    <div
      style={{
        display: "inline-block",
        textAlign: 'center',
        padding: "40px",
        width: "1000px",
      }}
    >
      <h3>Confirm signout</h3>
      <button onClick={logout}>SignOut</button>
    </div>
  );
}

export default SignOut;

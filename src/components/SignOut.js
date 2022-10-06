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
    <>
      <h3>Confirm signout</h3>
      <button onClick={logout}>SignOut</button>
    </>
  );
}

export default SignOut;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignIn() {
  // Define navigate variable to assist you navigate programmatically
  const navigate = useNavigate();
  
  // Define state for user logins
  const [userLogins, setUserLogins] = useState({
    username: '',
    password: ''
  })

  // Handle change of logins
  function handleUserLogins(e){
    setUserLogins({
      ...userLogins,
      [e.target.name]: e.target.value
    })
  }

  // Function to login user
  function loginUser(event){
    event.preventDefault();
    navigate('/')
  }

  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column", width: "400px" }}
        onSubmit={(e) => loginUser(e)}
      >
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          name="username"
          id="username"
          value={userLogins.username}
          onChange={(e) => handleUserLogins(e)}
        />

        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          id="password"
          value={userLogins.password}
          onChange={(e) => handleUserLogins(e)}
        />

        <button style={{ width: "100px" }}>Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;

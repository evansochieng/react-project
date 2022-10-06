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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "40px",
        width: "1000px",
      }}
    >
      <form
        style={{ display: "flex", flexDirection: "column", width: "400px" }}
        onSubmit={(e) => loginUser(e)}
      >
        <label
          htmlFor="username"
          style={{ marginBottom: "3px", fontWeight: "bold" }}
        >
          Username:{" "}
        </label>
        <input
          type="text"
          name="username"
          id="username"
          value={userLogins.username}
          style={{ marginBottom: "10px", height: "30px", borderRadius: "5px" }}
          onChange={(e) => handleUserLogins(e)}
        />

        <label
          htmlFor="password"
          style={{ marginBottom: "3px", fontWeight: "bold" }}
        >
          Password:{" "}
        </label>
        <input
          type="password"
          name="password"
          id="password"
          value={userLogins.password}
          style={{ marginBottom: "10px", height: "30px", borderRadius: "5px" }}
          onChange={(e) => handleUserLogins(e)}
        />

        <button
          style={{
            width: "100px",
            height: '30px',
            borderRadius: '5px',
            fontWeight: "bold",
            color: "white",
            backgroundColor: "#0ea5e9",
          }}
        >
          Sign In
        </button>
      </form>
    </div>
  );
}

export default SignIn;

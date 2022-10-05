import React from "react";

function SignIn() {
  return (
    <div>
      <form className="sign-in">
        <label htmlFor="username">Username: </label>
        <input type="text" name="username" id="username" />

        <label htmlFor="password">Password: </label>
        <input type="password" name="password" id="password" />

        <button>Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;

import React from "react";

function SignIn() {
  return (
    <div>
      <form className="flex-1" style={{display: 'flex', flexDirection: 'column', width: '400px'}}>
        <label htmlFor="username">Username: </label>
        <input type="text" name="username" id="username" />

        <label htmlFor="password">Password: </label>
        <input type="password" name="password" id="password" />

        <button style={{width: '100px'}}>Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;

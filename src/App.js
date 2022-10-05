import React from "react";
import { Routes, Route } from "react-router-dom";

// Import the other components
import NavBar from "./components/NavBar";
import SignIn from "./components/SignIn";
import Home from "./components/Home";
import CreateResume from "./components/CreateResume";
import SignOut from "./components/SignOut";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/signin" element={<SignIn />} />

        <Route exact path="/" element={<Home />} />

        <Route exact path="/createresume" element={<CreateResume />} />

        <Route exact path="/signout" element={<SignOut />} />
      </Routes>
    </div>
  );
}

export default App;

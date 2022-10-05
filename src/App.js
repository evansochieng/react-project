import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

// Import the other components
import NavBar from "./components/NavBar";
import SignIn from "./components/SignIn";
import Home from "./components/Home";
import CreateResume from "./components/CreateResume";
import SignOut from "./components/SignOut";

function App() {
  // Define state for resume items - user details
  const [resume, setResume] = useState([])

  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/signin" element={<SignIn />} />

        <Route exact path="/" element={<Home resume={resume} />} />

        <Route
          exact
          path="/createresume"
          element={<CreateResume resume={resume} setResume={setResume}/>}
        />

        <Route exact path="/signout" element={<SignOut />} />
      </Routes>
    </div>
  );
}

export default App;

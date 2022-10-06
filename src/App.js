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
  const [resumes, setResumes] = useState([])

  //function to add resumes
  function addNewResume(newResume){
    const updatedResumes = [...resumes, newResume]
    setResumes(updatedResumes)
  }

  return (
    <div style={{justifyContent: 'center', width: '100px'}}>
      <NavBar />
      <Routes>
        <Route exact path="/signin" element={<SignIn />} />

        <Route exact path="/" element={<Home resumes={resumes}/>} />

        <Route
          exact
          path="/createresume"
          element={<CreateResume addNewResume={addNewResume}/>}
        />

        <Route exact path="/signout" element={<SignOut />} />
      </Routes>
    </div>
  );
}

export default App;

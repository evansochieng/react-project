import React, { useState } from "react";
import DisplayResume from "./DisplayResume";

import resumeImg from "../resumeImg.jpg";

function Home() {
    //define state for search item
    const [searchedName, setSearchedName] = useState('');

    //define state for matching user
    const [matchingUser, setMatchingUser] = useState('');

    // set searched name from user input
    function grabUserInput(event){
        const name = event.target.value;
        setSearchedName(name);
    }

    function searchResume(event){
        event.preventDefault();

        {
          /* fetch the data from the api depending on the user input */
        }
        fetch("http://localhost:8000/resumes")
        .then(resp => resp.json())
        .then(resumes => {
          // Match searched user with appropriate resume
          const searchedUser = resumes.find(
            (resume) =>
              resume.name.split(" ").join("").toLowerCase() ===
              searchedName.split(" ").join("").toLowerCase()
          );
          // Set matching user 
          setMatchingUser(searchedUser);
          
          //Reset search box value
          setSearchedName('');
        })
    }
    
    return (
      <>
        <div
          style={{
            display: "inline-block",
            textAlign: "center",
            width: "1000px",
          }}
        >
          <div>
            <h1>RESUME BUILDER</h1>
            <img
              src={resumeImg}
              alt="START"
              style={{ height: "200px", width: "400px" }}
            />
          </div>
          <h3>Welcome to Resume Builder Application</h3>
          <form
            style={{ marginBottom: "10px" }}
            onSubmit={(e) => searchResume(e)}
          >
            <input
              type="text"
              placeholder="search resume"
              value={searchedName}
              onChange={(e) => grabUserInput(e)}
              style={{
                width: "300px",
                height: "30px",
                borderRadius: "5px",
                fontSize: "20px",
              }}
            />
            <button
              style={{
                width: "100px",
                height: "30px",
                marginLeft: "5px",
                backgroundColor: "#0ea5e9",
                borderRadius: "5px",
                fontWeight: "bold",
              }}
            >
              Search
            </button>
          </form>

          <div>
            {matchingUser ? (
              <DisplayResume resume={matchingUser} />
            ) : (
              <p style={{ marginTop: "50px", fontSize: "30px" }}>
                <strong>You have no resume yet. Please create one...</strong>
              </p>
            )}
          </div>
        </div>
      </>
    );
}

export default Home;

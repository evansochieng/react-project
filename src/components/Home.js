import React, { useState } from "react";
import DisplayResume from "./DisplayResume";

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
          <h1>Welcome to Resume Builder Application</h1>
          <form style={{marginBottom: '10px'}} onSubmit={(e) => searchResume(e)}>
            <input
              type="text"
              placeholder="search resume"
              value={searchedName}
              onChange={(e) => grabUserInput(e)}
              style={{ width: "200px" }}
            />
            <button
              style={{
                width: "100px",
                marginLeft: "5px",
                backgroundColor: "#7dd3fc",
                borderRadius: "5px",
              }}
            >
              Search
            </button>
          </form>

          <div>
            {matchingUser ? (
              <DisplayResume resume={matchingUser} />
            ) : (
              <p>
                <strong>You have no resume yet. Please create one...</strong>
              </p>
            )}
          </div>
        </div>
      </>
    );
}

export default Home;

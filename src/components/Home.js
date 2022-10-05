import React from "react";

function Home({ resumes }) {

    // fetch the data from the api depending on the user input
    
    return (
      <>
        <h1>Welcome to Resume Builder Application</h1>

        <form className="search-form">
          <input type="text" placeholder="search resume" />
          <button>Search</button>
        </form>

        <div>
          <p>Your resume will appear here</p>
        </div>
      </>
    );
}

export default Home;

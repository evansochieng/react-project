import React from "react";

function Home() {
  return (
    <>
      <h1>Welcome to Resume Builder Application</h1>

      <form className="search-form">
        <input type="text" placeholder="search resume" />
        <button>Search</button>
      </form>
    </>
  );
}

export default Home;

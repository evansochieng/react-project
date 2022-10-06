import React, { useState } from "react";

function CreateResume({ addNewResume }) {
    // Define state for resume details
    const [resumeItems, setResumeItems] = useState({
        about: '',
        name: '',
        email: '',
        github: '',
        education: '',
        skills: '',
        experience: '',
        projects: ''
    })

    //Handle change in user inputs
    function handleChange(event){
        setResumeItems({
            ...resumeItems,
            [event.target.name]: event.target.value //change appropriate item
        })
    }
  
  //Create function to fetch user resume on submit
  function createResume(event){
    event.preventDefault();

    // make a POST request to add the resume details to the API
    fetch("http://localhost:8000/resumes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepted: "application/json",
      },
      body: JSON.stringify(resumeItems),
    })
      .then((response) => response.json())
      .then((data) => addNewResume(data));

    // Reset the input boxes
    setResumeItems({
      about: "",
      name: "",
      email: "",
      github: "",
      education: "",
      skills: "",
      experience: "",
      projects: "",
    });
  } 

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "left",
        width: "1000px",
      }}
    >
      <form className="resume" onSubmit={(e) => createResume(e)}>
        {/* Contact details: official name, githubUsername, phone, email */}
        <div
          style={{ display: "flex", flexDirection: "column", width: "600px" }}
        >
          <h3 style={{ color: "#14532d" }}>Contact Details</h3>
          <label
            htmlFor="name"
            style={{
              marginBottom: "3px",
              fontWeight: "bold",
              color: "#4d7c0f",
            }}
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            value={resumeItems.name}
            onChange={(e) => handleChange(e)}
            style={{
              width: "400px",
              height: "25px",
              borderRadius: "5px",
              fontSize: "20px",
              marginBottom: "3px",
            }}
          />
          <label
            htmlFor="email"
            style={{
              marginBottom: "3px",
              fontWeight: "bold",
              color: "#4d7c0f",
            }}
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={resumeItems.email}
            onChange={(e) => handleChange(e)}
            style={{
              width: "400px",
              height: "25px",
              borderRadius: "5px",
              fontSize: "20px",
              marginBottom: "3px",
            }}
          />
          <label
            htmlFor="github"
            style={{
              marginBottom: "3px",
              fontWeight: "bold",
              color: "#4d7c0f",
            }}
          >
            GitHub Profile
          </label>
          <input
            type="text"
            name="github"
            value={resumeItems.github}
            onChange={(e) => handleChange(e)}
            style={{
              width: "400px",
              height: "25px",
              borderRadius: "5px",
              fontSize: "20px",
              marginBottom: "3px",
            }}
          />
        </div>

        {/* Information about myself */}
        <div
          className="about"
          style={{ display: "flex", flexDirection: "column", width: "600px" }}
        >
          <h3 style={{ color: "#14532d" }}>Information about myself</h3>
          <label
            htmlFor="about"
            style={{
              marginBottom: "3px",
              fontWeight: "bold",
              color: "#4d7c0f",
            }}
          >
            About Myself
          </label>
          <input
            type="text"
            name="about"
            value={resumeItems.about}
            onChange={(e) => handleChange(e)}
            style={{
              width: "400px",
              height: "25px",
              borderRadius: "5px",
              fontSize: "20px",
              marginBottom: "3px",
            }}
          />
        </div>

        {/* Education */}
        <div
          className="education"
          style={{ display: "flex", flexDirection: "column", width: "600px" }}
        >
          <h3 style={{ color: "#14532d" }}>Academic Qualifications</h3>
          <label
            htmlFor="education"
            style={{
              marginBottom: "3px",
              fontWeight: "bold",
              color: "#4d7c0f",
            }}
          >
            Academic Qualifications
          </label>
          <input
            type="text"
            name="education"
            value={resumeItems.education}
            onChange={(e) => handleChange(e)}
            style={{
              width: "400px",
              height: "25px",
              borderRadius: "5px",
              fontSize: "20px",
              marginBottom: "3px",
            }}
          />
        </div>

        {/* Skills and Abilities */}
        <div
          className="skills"
          style={{ display: "flex", flexDirection: "column", width: "600px" }}
        >
          <h3 style={{ color: "#14532d" }}>Skills and Abilities</h3>
          <label
            htmlFor="skills"
            style={{
              marginBottom: "3px",
              fontWeight: "bold",
              color: "#4d7c0f",
            }}
          >
            Skills
          </label>
          <input
            type="text"
            name="skills"
            id="skills"
            value={resumeItems.skills}
            onChange={(e) => handleChange(e)}
            style={{
              width: "400px",
              height: "25px",
              borderRadius: "5px",
              fontSize: "20px",
              marginBottom: "3px",
            }}
          />
        </div>

        {/* Work Experience */}
        <div
          className="experience"
          style={{ display: "flex", flexDirection: "column", width: "600px" }}
        >
          <h3 style={{ color: "#14532d" }}>Work Experience</h3>
          <label
            htmlFor="experience"
            style={{
              marginBottom: "3px",
              fontWeight: "bold",
              color: "#4d7c0f",
            }}
          >
            Work Experience
          </label>
          <input
            type="text"
            name="experience"
            id="experience"
            value={resumeItems.experience}
            onChange={(e) => handleChange(e)}
            style={{
              width: "400px",
              height: "25px",
              borderRadius: "5px",
              fontSize: "20px",
              marginBottom: "3px",
            }}
          />
        </div>

        {/* Projects */}
        <div
          className="projects"
          style={{ display: "flex", flexDirection: "column", width: "600px" }}
        >
          <h3 style={{ color: "#14532d" }}>Projects</h3>
          <label
            htmlFor="projects"
            style={{
              marginBottom: "3px",
              fontWeight: "bold",
              color: "#4d7c0f",
            }}
          >
            Projects
          </label>
          <input
            type="text"
            name="projects"
            id="projects"
            value={resumeItems.projects}
            onChange={(e) => handleChange(e)}
            style={{
              width: "400px",
              height: "25px",
              borderRadius: "5px",
              fontSize: "20px",
              marginBottom: "3px",
            }}
          />
        </div>

        {/* Submit button */}
        <button
          style={{
            width: "100px",
            height: "30px",
            marginTop: "10px",
            backgroundColor: "#16a34a",
            borderRadius: "5px",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Create
        </button>
      </form>
    </div>
  );
}

export default CreateResume;

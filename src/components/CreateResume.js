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
    <div>
      <form className="resume" onSubmit={(e) => createResume(e)}>
        {/* Information about myself */}
        <div
          className="about"
          style={{ display: "flex", flexDirection: "column", width: "1000px" }}
        >
          <h3>Information about myself</h3>
          <label htmlFor="about">About Myself</label>
          <input
            type="text"
            name="about"
            value={resumeItems.about}
            onChange={(e) => handleChange(e)}
          />
        </div>

        {/* Contact details: official name, githubUsername, phone, email */}
        <div
          style={{ display: "flex", flexDirection: "column", width: "1000px" }}
        >
          <h3>Contact Details</h3>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={resumeItems.name}
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={resumeItems.email}
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="github">GitHub Profile</label>
          <input
            type="text"
            name="github"
            value={resumeItems.github}
            onChange={(e) => handleChange(e)}
          />
        </div>

        {/* Education */}
        <div
          className="education"
          style={{ display: "flex", flexDirection: "column", width: "1000px" }}
        >
          <h3>Academic Qualifications</h3>
          <label htmlFor="education">Academic Qualifications</label>
          <input
            type="text"
            name="education"
            value={resumeItems.education}
            onChange={(e) => handleChange(e)}
          />
        </div>

        {/* Skills and Abilities */}
        <div
          className="skills"
          style={{ display: "flex", flexDirection: "column", width: "1000px" }}
        >
          <h3>Skills and Abilities</h3>
          <label htmlFor="skills">Skills</label>
          <input
            type="text"
            name="skills"
            id="skills"
            value={resumeItems.skills}
            onChange={(e) => handleChange(e)}
          />
        </div>

        {/* Work Experience */}
        <div
          className="experience"
          style={{ display: "flex", flexDirection: "column", width: "1000px" }}
        >
          <h3>Work Experience</h3>
          <label htmlFor="experience">Work Experience</label>
          <input
            type="text"
            name="experience"
            id="experience"
            value={resumeItems.experience}
            onChange={(e) => handleChange(e)}
          />
        </div>

        {/* Projects */}
        <div
          className="projects"
          style={{ display: "flex", flexDirection: "column", width: "1000px" }}
        >
          <h3>Projects</h3>
          <label htmlFor="projects">Projects</label>
          <input
            type="text"
            name="projects"
            id="projects"
            value={resumeItems.projects}
            onChange={(e) => handleChange(e)}
          />
        </div>

        {/* Submit button */}
        <button>Create</button>
      </form>
    </div>
  );
}

export default CreateResume;

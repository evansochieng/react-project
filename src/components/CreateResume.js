import React from "react";

function CreateResume() {
  return (
    <div>
      <form className="resume">
        {/* Information about myself */}
        <div className="about">
          <h3>Information about myself</h3>
          <label htmlFor="about">About Myself</label>
          <input type="text" name="about" />
        </div>

        {/* Contact details: official name, githubUsername, phone, email */}
        <div className="flex flex-col ...">
          <h3>Contact Details</h3>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
          <label htmlFor="github">GitHub Profile</label>
          <input type="text" name="github" />
        </div>

        {/* Education */}
        <div className="education">
          <h3>Academic Qualifications</h3>
          <label htmlFor="education">Academic Qualifications</label>
          <input type="text" name="education" />
        </div>

        {/* Skills and Abilities */}
        <div className="skills">
          <h3>Skills and Abilities</h3>
          <label htmlFor="skills">Skills</label>
          <input type="text" name="skills" id="skills" />
        </div>

        {/* Work Experience */}
        <div className="experience">
          <h3>Work Experience</h3>
          <label htmlFor="experience">Work Experience</label>
          <input type="text" name="experience" id="experience" />
        </div>

        {/* Projects */}
        <div className="projects">
          <h3>Projects</h3>
          <label htmlFor="projects">Projects</label>
          <input type="text" name="projects" id="projects" />
        </div>

        {/* Submit button */}
        <button>Create</button>
      </form>
    </div>
  );
}

export default CreateResume;

import React from 'react'

function DisplayResume(resume) {
  return (
    <div>
        <h2>{resume.name}</h2>
        <br />
        <h3>Personal Information</h3>
        <li>Email: {resume.email}</li>
        <li>Github Profile: {resume.github}</li>
        <br />
        <h3>About Myself</h3>
        <p>{resume.about}</p>
        <br />
        <h3>Education</h3>
        <li>{resume.education}</li>
        <br />
        <h3>Skills and Abilities</h3>
        <li>{resume.skills}</li>
        <br />
        <h3>Work and Experience</h3>
        <li>{resume.experience}</li>
        <br />
        <h3>Personal Projects</h3>
        <li>{resume.projects}</li>
        <br />
    </div>
  )
}

export default DisplayResume
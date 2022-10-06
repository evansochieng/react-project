import React from 'react'

function DisplayResume({resume}) {
  return (
    <div style={{alignItems: 'center', backgroundColor: 'lightblue', padding: '40px', width: '400px'}}>
      <h2>{resume.name}</h2>
      <br />
      <h3 style={{ color: "#0284c7" }}>Personal Information</h3>
      <li>Email: {resume.email}</li>
      <li>Github Profile: {resume.github}</li>
      <br />
      <h3 style={{ color: "#0284c7" }}>About Myself</h3>
      <p>{resume.about}</p>
      <br />
      <h3 style={{ color: "#0284c7" }}>Education</h3>
      <li>{resume.education}</li>
      <br />
      <h3 style={{ color: "#0284c7" }}>Skills and Abilities</h3>
      <li>{resume.skills}</li>
      <br />
      <h3 style={{ color: "#0284c7" }}>Work and Experience</h3>
      <li>{resume.experience}</li>
      <br />
      <h3 style={{ color: "#0284c7" }}>Personal Projects</h3>
      <li>{resume.projects}</li>
      <br />
    </div>
  );
}

export default DisplayResume
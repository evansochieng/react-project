import React from 'react';
import {
  GoMarkGithub,
  GoMail,
  GoPerson,
  GoMortarBoard,
  GoOrganization,
} from "react-icons/go";
import { ImUserTie, ImAccessibility, ImWrench } from "react-icons/im";

function DisplayResume({resume}) {
  return (
    <div
      style={{
        display: "inline-block",
        textAlign: "left",
        backgroundColor: "lightblue",
        padding: "40px",
        width: "600px",
      }}
    >
      <h2>{resume.name}</h2>
      <h3 style={{ color: "#0284c7" }}>
        <GoPerson /> Personal Information
      </h3>
      <li>
        <GoMail />: {resume.email}
      </li>
      <li>
        <GoMarkGithub />: {resume.github}
      </li>
      <br />
      <h3 style={{ color: "#0284c7" }}>
        <ImUserTie /> About Myself
      </h3>
      <p>{resume.about}</p>
      <br />
      <h3 style={{ color: "#0284c7" }}>
        <GoMortarBoard /> Education
      </h3>
      <li>{resume.education}</li>
      <br />
      <h3 style={{ color: "#0284c7" }}>
        <ImWrench /> Skills and Abilities
      </h3>
      <li>{resume.skills}</li>
      <br />
      <h3 style={{ color: "#0284c7" }}>
        <GoOrganization /> Work and Experience
      </h3>
      <li>{resume.experience}</li>
      <br />
      <h3 style={{ color: "#0284c7" }}>
        <ImAccessibility /> Personal Projects
      </h3>
      <li>{resume.projects}</li>
      <br />
    </div>
  );
}

export default DisplayResume
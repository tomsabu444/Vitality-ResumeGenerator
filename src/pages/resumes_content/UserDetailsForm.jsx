import React, { useState } from 'react';

import styled from "styled-components";

const UserDetailsForm = () => {
  const [education, setEducation] = useState('');
  const [experience, setExperience] = useState('');
  const [links, setLinks] = useState('');
  const [languages, setLanguages] = useState('');
  const [personalDetails, setPersonalDetails] = useState('');
  const [skills, setSkills] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log({
      education,
      experience,
      links,
      languages,
      personalDetails,
      skills
    });
  };

  return (
    <div>
      <h2>User Details</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="education">Education:</label>
          <input type="text" id="education" value={education} onChange={(e) => setEducation(e.target.value)} />
        </div>
        <div>
          <label htmlFor="experience">Experience:</label>
          <input type="text" id="experience" value={experience} onChange={(e) => setExperience(e.target.value)} />
        </div>
        <div>
          <label htmlFor="links">Links:</label>
          <input type="text" id="links" value={links} onChange={(e) => setLinks(e.target.value)} />
        </div>
        <div>
          <label htmlFor="languages">Languages:</label>
          <input type="text" id="languages" value={languages} onChange={(e) => setLanguages(e.target.value)} />
        </div>
        <div>
          <label htmlFor="personalDetails">Personal Details:</label>
          <textarea id="personalDetails" value={personalDetails} onChange={(e) => setPersonalDetails(e.target.value)} />
        </div>
        <div>
          <label htmlFor="skills">Skills:</label>
          <input type="text" id="skills" value={skills} onChange={(e) => setSkills(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserDetailsForm;


const Container = styled.div`
.user-details-form-container {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.user-details-form-container h2 {
  margin-bottom: 20px;
}

.user-details-form-container form div {
  margin-bottom: 15px;
}

.user-details-form-container label {
  display: block;
  margin-bottom: 5px;
}

.user-details-form-container input[type="text"],
.user-details-form-container textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.user-details-form-container textarea {
  resize: vertical;
}

.user-details-form-container button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.user-details-form-container button:hover {
  background-color: #0056b3;
}

`;

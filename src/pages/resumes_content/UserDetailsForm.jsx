import React, { useState } from 'react';

const ResumeForm = () => {
  const [formData, setFormData] = useState({
    education: '',
    experience: '',
    links: '',
    languages: '',
    personalDetails: '',
    skills: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, for example, sending data to backend or storing in state
    console.log(formData);
    // Reset form after submission
    setFormData({
      education: '',
      experience: '',
      links: '',
      languages: '',
      personalDetails: '',
      skills: ''
    });
  };

  return (
    <div>
      <h1>Resume Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="education">Education:</label>
          <input
            type="text"
            id="education"
            name="education"
            value={formData.education}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="experience">Experience:</label>
          <input
            type="text"
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="links">Links:</label>
          <input
            type="text"
            id="links"
            name="links"
            value={formData.links}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="languages">Languages:</label>
          <input
            type="text"
            id="languages"
            name="languages"
            value={formData.languages}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="personalDetails">Personal Details:</label>
          <textarea
            id="personalDetails"
            name="personalDetails"
            value={formData.personalDetails}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="skills">Skills:</label>
          <textarea
            id="skills"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ResumeForm;


import styled from "styled-components";

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

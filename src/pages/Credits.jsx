// Credits.js
import React from "react";
import styled from "styled-components";

import Jishnu_image from "../images/Credits_photos/jishnu.jpeg";
import Tom_image from "../images/Credits_photos/tomsabu.jpg";
import Jot_image from "../images/Credits_photos/justin.jpg";


import Layout from "../components/Layout";
const Credits = () => {
  const teamMembers = [
    {
      name: "Jishnu Mohan",
      github: "https://github.com/Jishnumo",
      linkedin: "https://www.linkedin.com/in/jishnu-mohan-b5837a227",
      email: "jishnumohan292@gmail.com",
      description: "Pro Designer",
      image: Jishnu_image,
    },
    {
      name: "Tom Sabu",
      github: "https://github.com/tomsabu444",
      linkedin: "https://www.linkedin.com/in/tomsabu444/",
      email: "tomsabu0000@gmail.com",
      description: "Developer",
      image: Tom_image,
    },
    {
      name: "Justin James Elampurayidom",
      github: "https://github.com/Justin-James-Elampurayidom",
      linkedin: "https://www.linkedin.com/in/justin-james-elampurayidom",
      email: "justinjameselampurayidom@gmail.com",
      description: "Developer",
      image: Jot_image,
    },
  ];

  return (
    <Layout>
      <Container>
        <div className="con">
          <h2>Team Vitality</h2>
          <p>Meet the amazing team behind this project</p>
          <ul>
            {teamMembers.map((member, index) => (
              <Member key={index}>
                <img src={member.image} alt={member.name} />
                <div>
                  <strong>{member.name}</strong> <br /> {member.description}
                  <br />
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href={`mailto:${member.email}`}>
                    <i className="far fa-envelope"></i>
                  </a>
                </div>
              </Member>
            ))}
          </ul>
        </div>
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh; /* Set minimum height to the full viewport height */
  padding: 20px;
  text-align: center;
  background-color: #222222cd;

  h2 {
    color: #333;
  }

  p {
    margin-bottom: 20px;
  }
  .con {
    height: auto;
    width: auto;
    padding: 30px 30px;
    border-radius: 15px;
    background: linear-gradient(to top, grey, #ddd9d9);
    box-shadow: 7px 7px 14px 8px #3b3a3ac5;
  }

  .con:hover img {
    transform: scale(1.12);
    border: 3px solid black;
  }
`;

const Member = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    transition: all 0.3s;
    margin-right: 20px;
    box-shadow: 7px 7px 14px #5e5b5bc5;
  }

  div {
    flex: 1;
  }

  a {
    text-decoration: none;
    color: #333;
    margin-right: 10px;
  }

  i {
    font-size: 24px;
  }
`;

export default Credits;

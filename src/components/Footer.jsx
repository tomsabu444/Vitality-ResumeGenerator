import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container>
      <footer>
        <span>
          Team <Link to="/credits">Vitality</Link> &nbsp;
          <span className="far fa-copyright"></span> 2024 All rights reserved.
        </span>
      </footer>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  /* footer section styling */
  footer {
    position: fixed;
    bottom: 0;
    background: rgb(0, 0, 0);
    padding: 15px 23px;
    color: rgb(255, 255, 255);
    text-align: center;
    z-index: 20;
    width:100vw;
  }
  footer span a {
    color: rgb(255, 238, 0);
    text-decoration: none;
  }
  footer span a:hover {
    text-decoration: underline;
  }
`;


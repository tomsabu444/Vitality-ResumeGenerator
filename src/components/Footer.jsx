import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <footer>
        <span>
          By <a href="https://www.instagram.com/">TOM</a> |
          <span className="far fa-copyright"></span> 2021 All rights reserved.
        </span>
      </footer>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  /* footer section styling */
  footer {
    bottom: 0;
    background: rgb(0, 0, 0);
    padding: 15px 23px;
    color: rgb(255, 196, 0);
    text-align: center;
    z-index: 20;
  }
  footer span a {
    color: rgb(231, 225, 225);
    text-decoration: none;
  }
  footer span a:hover {
    text-decoration: underline;
  }
`;

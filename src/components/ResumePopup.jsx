import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IoCloseCircleOutline } from "react-icons/io5";

const ResumePopup = ({ onClose }) => {
  return (
    <PopupContainer>
      <button className="closeButton" onClick={onClose}>
        <IoCloseCircleOutline />
      </button>
      <div className="card">
        <p className="cookieHeading">Create New Vitality Resume?</p>
        <h3 className="cookieDescription">
          By selecting Create New Resume, your content will be permanently
          deleted.
        </h3>

        <div className="buttonContainer">
          <StyledLink to="/test">Create New Resume</StyledLink>
          <StyledLink to="/choose-template">Choose Template</StyledLink>
        </div>
      </div>
    </PopupContainer>
  );
};

export default ResumePopup;

const PopupContainer = styled.div`
  position: fixed;
  z-index: 30;

  .closeButton {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 2em;
    cursor: pointer;
    color: rgb(99, 99, 99);
  }

  .card {
    width: 410px;
    height: 370px;
    background-color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px 30px;
    gap: 13px;
    border-radius: 20px;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.062);
  }

  #cookieSvg {
    width: 50px;
  }

  .cookieHeading {
    margin-bottom: 10px;
    text-align: center;
    font-size: 1.8em;
    font-weight: 800;
    color: rgb(26, 26, 26);
  }

  .cookieDescription {
    text-align: center;
    font-size: 0.9em;
    font-weight: 600;
    color: rgb(99, 99, 99);
  }

  .buttonContainer {
    display: flex;
    gap: 20px;
    flex-direction: row;
    padding-top: 20px;
  }

  @media (max-width: 425px) {
    .card {
      width: 310px;
      height: 270px;
    }
  }
`;

const StyledLink = styled(Link)`
  width: 175px;
  height: 50px;
  background-color: #7b57ff;
  transition-duration: 0.2s;
  border: none;
  color: rgb(241, 241, 241);
  cursor: pointer;
  font-weight: 600;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  &:hover {
    background-color: #4d26da;
    transition-duration: 0.2s;
  }
`;

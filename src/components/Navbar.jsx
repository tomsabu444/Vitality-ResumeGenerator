import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <Container>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink to="/" className="nav-logo">
            <span>
              <h1>Vitality</h1>
            </span>
          </NavLink>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <IoCloseOutline /> : <IoMenuOutline />}
          </div>
          {click && (
            <ul className="nav-menu">
              <li className="nav-item">
                <NavLink to="/" className="nav-links" onClick={handleClick}>
                  Home
                </NavLink>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </Container>
  );
}

export default NavBar;

const Container = styled.div`
  nav {
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0)
    );
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.071);
    -webkit-backdrop-filter: blur(10px);
    padding: 15px;
    width: 100%;
    position: absolute;
  }

  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .menu-icon {
    display: none; /* Hide the menu icon by default */
  }

  .nav-menu {
    list-style: none;
    display: flex;
  }

  .nav-item {
    margin-right: 20px;
  }

  .nav-links {
    text-decoration: none;
    color: rgba(181, 153, 12, 0.962);
  }

  h1 {
    color: rgba(181, 153, 12, 0.962);
    font-size: 2.14rem;
  }

  a {
    text-decoration: none;
  }

  @media screen and (max-width: 768px) {
    .menu-icon {
      display: block; /* Display the menu icon when screen size is less than 768px */
      cursor: pointer;
    }

    .nav-menu {
      display: ${({ click }) =>
        click ? "flex" : "none"}; /* Show the menu when click is true */
      flex-direction: column;
      position: absolute;
      top: 80px;
      left: 0;
      width: 100%;
      background-color: rgba(255, 255, 255, 0.9);
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    }

    .nav-item {
      margin-right: 0;
      margin-bottom: 10px;
    }
  }
`;

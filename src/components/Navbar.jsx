import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <Container>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <span>CodeBucks</span>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/blog"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {click ? (
              <span className="icon">
                <RxHamburgerMenu className="hamburgeropen" />{" "}
              </span>
            ) : (
              <span className="icon">
                <IoCloseOutline />
              </span>
            )}
          </div>
        </div>
      </nav>
    </Container>
  );
}

export default NavBar;

const Container = styled.div`
  .navbar {
    background-color: #1f5156;
    width: 100vw;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: fixed;
    top: 0;
    z-index: 20;
  }

  .nav-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80px;
    max-width: 1500px;
    position: relative;
  }

  .nav-logo {
    color: #f5b921;
    align-items: center;
    margin-left: 20px;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    flex-grow: 1;

    display: flex;
    align-items: center;
    justify-items: center;
  }

  .nav-logo .icon {
    display: inline-block;
    width: 3rem;
    height: 3rem;
    margin-left: 16px;
  }

  .nav-menu {
    display: flex;
    list-style: none;
    text-align: center;
    margin-right: 2rem;
  }

  .nav-links {
    color: #fff;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;
    border-bottom: 3px solid transparent;
  }
  /* .fa-code {
  margin-left: 1rem;
} */

  .nav-item {
    line-height: 40px;
    margin-right: 1rem;
  }

  .nav-item:after {
    content: "";
    display: block;
    height: 3px;
    width: 0;
    background: transparent;
    transition: width 0.7s ease, background-color 0.5s ease;
  }

  .nav-item:hover:after {
    width: 100%;
    background: #ffdd40;
  }

  .nav-item .active {
    color: #ffdd40;
    border: 1px solid #ffdd40;
  }

  .nav-icon {
    display: none;
    color: #f5b921;
  }

  .nav-icon .icon {
    display: inline-block;
    width: 2rem;
    height: 2rem;
  }

  @media screen and (max-width: 960px) {
    .nav-menu {
      display: flex;
      flex-direction: column;
      width: 100%;
      border-top: 1pxsolid #fff;
      position: absolute;
      top: 80px;
      left: -110%;
      opacity: 1;
      transition: all 0.5s ease;
    }

    .nav-menu.active {
      background: #1f5156;
      left: 0px;
      opacity: 1;
      transition: all 0.5s ease;
      z-index: 1;
    }
    .nav-item .active {
      color: #ffdd40;
      border: none;
    }
    .nav-links {
      padding: 1.5rem;
      width: 100%;
      display: table;
    }

    .nav-logo .icon {
      width: 2rem;
      height: 2rem;
    }

    .nav-icon {
      display: block;
      position: absolute;
      top: 50%;
      right: 0;
      transform: translate(-100%, -50%);
      width: 2rem;
      height: 2rem;
      cursor: pointer;
      color: #ffdd40;

    }

    .hamburgeropen{
       width: 20px;
       height: 30px;

    }
  }
`;

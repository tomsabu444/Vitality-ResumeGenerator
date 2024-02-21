import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";

function NavBar() {
  const [click, setClick] = useState(false);

    // Define navigation items
    const navItems = [
      { path: "/", name: "Home" },
      { path: "/about", name: "About" },
      { path: "/blog", name: "Blog" },
      { path: "/contact", name: "Contact Us" }
    ];

  const handleClick = () => setClick(!click);
  return (
    <Container>
    <nav className="navbar">
      <div className="nav-container">
        <NavLink exact to="/" className="nav-logo">
          <span>Vitality</span>
        </NavLink>

        <div className="nav-animation">
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {navItems.map((item, index) => (
              <li className="nav-item" key={index}>
                <NavLink
                  exact
                  to={item.path}
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="nav-icon" onClick={handleClick}>
          {click ? (
            <span className="icon icon-s">
              <IoCloseOutline />{" "}
            </span>
          ) : (
            <span className="icon icon-s">
              <RxHamburgerMenu />
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
    background: #222;
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

  a .logo {
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

  .nav-item .active {
    background: linear-gradient(45deg, #524306, #ffdd40);
    color: white;
    font-weight: 600;
    border-radius: 15px;
  }

  .nav-icon {
    display: none;
    color: #fff;
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
    .nav-menu {
      color: white;
      font-weight: 600;
    }
    .nav-animation ul {
      background-color: #1919228f;
    }
    .nav-item .active {
      background: transparent;
      border-radius: 0;
    }
    .nav-menu.active {
      background: #222;
      left: 0px;
      opacity: 1;
      transition: all 0.5s ease;
      z-index: 1;
    }
    .nav-item .active {
      color: #ffffff;
      border: none;
    }
    .nav-item:hover {
      color: red;
    }
    .nav-links {
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

    .hamburgeropen {
      width: 20px;
      height: 30px;
    }
    .nav-item .active {
      color: #ffdd40;
    }
    .icon-s {
      font-size: 2.1rem;
    }
  }
`;

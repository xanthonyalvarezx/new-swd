import { React } from "react";
import baseLogo from "../assets/red-transparent-logo.png";
import { Outlet, NavLink } from "react-router-dom";
import "../styles/navbar.scss";

const Navbar = () => {
  return (
    <>
      <div id="nav-container">
        <a href="/">
          <img
            id="nav-logo"
            src={baseLogo}
            alt="success web development logo"
          />
        </a>
        <nav id="link-cont">
          <ul id="link-list">
            <li className="nav-link">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/what-we-do">What We Do</NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </>
  );
  <script src=""></script>;
};

export default Navbar;

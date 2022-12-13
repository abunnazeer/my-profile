import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <nav className="header-container">
      <div className="header">
        <div className="brand">
          <Link to="/">
            <img src="assets/logo.png" alt="logo" srcSet="" />
          </Link>
        </div>
        <div className="menu">
          <ul className="links">
            <li>
              <NavLink to="/showcase">Project</NavLink>
            </li>
            <li>
              <NavLink to="/resources">resources</NavLink>
            </li>
            <li>
              <NavLink to="/about-me">About Me</NavLink>
            </li>
          </ul>
        </div>
        <Link className="custom-btn lets-talk" to="/settings">
          LOGIN
        </Link>
      </div>
    </nav>
  );
}

export default Header;

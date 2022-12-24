import { React, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import LoginFrom from '../../administration/LoginForm';

function Header() {
  const [showLogin, setLogin] = useState(true);
  const value = '123456';
  const handleValidation = () => {
    const val = window.prompt();
    if (value === val) {
      console.log('login');
    }
  };
  return (
    <nav className="header-container">
      <div className="header">
        <div className="brand">
          <Link to="/">
            <img src="./../assets/logo.png" alt="logo" srcSet="" />
          </Link>
        </div>
        <LoginFrom setLogin={showLogin} />
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
        <Link
          className="custom-btn lets-talk"
          to="settings"
          onClick={handleValidation}
        >
          LOGIN
        </Link>
      </div>
    </nav>
  );
}

export default Header;

import React from 'react';
import { NavLink } from 'react-router-dom';
function MobileMenu() {
  return (
    <footer className="mobile__bottom__menu">
      <ul className="mobile__menu t__trans__upper">
        <li className="list__item ">
          <NavLink to="/">
            <i className="fa-solid fa-house mr__half"></i>
            Home
          </NavLink>
        </li>

        <li className="list__item ">
          <NavLink to="/resources">
            <i className="fa-regular fa-folder-open mr__half"></i>
            RESOURCES
          </NavLink>
        </li>

        <li className="list__item ">
          <NavLink to="/about-me">
            <i className="fa-sharp fa-solid fa-id-card mr__half"></i>
            About me
          </NavLink>
        </li>
      </ul>
    </footer>
  );
}

export default MobileMenu;

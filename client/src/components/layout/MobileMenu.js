import React from 'react';

function MobileMenu() {
  return (
    <footer className="mobile__bottom__menu">
      <ul className="mobile__menu t__trans__upper">
        <li className="list__item ">
          <a href="/">
            <i className="fa-solid fa-house mr__half"></i>
            Home
          </a>
        </li>

        <li className="list__item ">
          <a href="#about">
            <i className="fa-solid fa-house mr__half"></i>
            About
          </a>
        </li>

        <li className="list__item ">
          <a href="#projects">
            <i className="fa-regular fa-folder-open mr__half"></i>
            Projects
          </a>
        </li>

        <li className="list__item ">
          <a href="#skills">
            <i className="fa-sharp fa-solid fa-id-card mr__half"></i>
            Skills
          </a>
        </li>

        <li className="list__item ">
          <a href="#contact">
            <i className="fa-sharp fa-solid fa-id-card mr__half"></i>
            Contact
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default MobileMenu;

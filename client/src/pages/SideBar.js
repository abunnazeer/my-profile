import { Fragment, useState } from 'react';
import aboutStyles from './about.module.css';

//import { Link } from 'react-router-dom';

function SideBar(props) {
  //   if (!props.show) {
  //     return null;
  //   }
  return (
    <Fragment>
      <div className={aboutStyles.about__sidebar}>
        <h1>Navigation</h1>
        <ul>
          <li onClick={props.about}>ABOUT ME </li>

          <li>EXPERIENCE</li>
          <li>EDUCATION</li>
          <li>CERTIFCATION</li>
          <li>PUBLICATION</li>
          <li>GALAERY</li>
          <li>SKILLS</li>
        </ul>
      </div>
    </Fragment>
  );
}

export default SideBar;

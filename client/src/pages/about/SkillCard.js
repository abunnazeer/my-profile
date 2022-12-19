import { Fragment } from 'react';
import aboutStyles from './about.module.css';
function SkillCard(props) {
  if (!props.skill) {
    return null;
  }
  return (
    <Fragment>
      <div className={`${aboutStyles.about__card}`}>
        <div className={`${aboutStyles.about__title}`}>
          <h1>SKILLS</h1>
        </div>
        <ul className={`${aboutStyles.about__skill_list}`}>
          <li>JAVASCRIPT</li>
          <li>NODE-JS</li>
          <li>REACT-JS</li>
          <li>MONGOdB</li>
          <li>JAVASCRIPT</li>
          <li>NODE-JS</li>
          <li>REACT-JS</li>
          <li>MONGOdB</li>
          <li>JAVASCRIPT</li>
          <li>NODE-JS</li>
          <li>REACT-JS</li>
          <li>MONGOdB</li>
          <li>JAVASCRIPT</li>
        </ul>
      </div>
    </Fragment>
  );
}

export default SkillCard;

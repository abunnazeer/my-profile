import { Fragment } from 'react';
import aboutStyles from './about.module.css';

function ExperienceCard(props) {
  if (!props.exp) {
    return null;
  }
  return (
    <Fragment>
      <div className={`${aboutStyles.about__card}`}>
        <div className={`${aboutStyles.about__title}`}>
          <h1>EXPERIENCE</h1>
        </div>
      </div>
    </Fragment>
  );
}

export default ExperienceCard;

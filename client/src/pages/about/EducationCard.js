import { Fragment } from 'react';
import aboutStyles from './about.module.css';

function EducationCard(props) {
  if (!props.edu) {
    return null;
  }
  return (
    <Fragment>
      <div className={`${aboutStyles.about__card}`}>
        <div className={`${aboutStyles.about__title}`}>
          <h1>EDUCATION</h1>
        </div>
      </div>
    </Fragment>
  );
}
export default EducationCard;

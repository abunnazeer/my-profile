import { Fragment } from 'react';
import aboutStyles from './about.module.css';

function CertificationCard(props) {
  if (!props.cert) {
    return null;
  }
  return (
    <Fragment>
      <div className={`${aboutStyles.about__card}`}>
        <div className={`${aboutStyles.about__title}`}>
          <h1>CERTIFCATION</h1>
        </div>
      </div>
    </Fragment>
  );
}

export default CertificationCard;

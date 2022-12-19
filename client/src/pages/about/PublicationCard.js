import { Fragment } from 'react';
import aboutStyles from './about.module.css';

function PublicationCard(props) {
  if (!props.publ) {
    return null;
  }
  return (
    <Fragment>
      <div className={`${aboutStyles.about__card}`}>
        <div className={`${aboutStyles.about__title}`}>
          <h1>PUBLICATION</h1>
        </div>
      </div>
    </Fragment>
  );
}

export default PublicationCard;

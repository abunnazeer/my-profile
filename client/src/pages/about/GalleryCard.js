import { Fragment } from 'react';
import aboutStyles from './about.module.css';

function GalleryCard(props) {
  if (!props.gal) {
    return null;
  }
  return (
    <Fragment>
      <div className={`${aboutStyles.about__card}`}>
        <div className={`${aboutStyles.about__title}`}>
          <h1>GALLERY</h1>
        </div>
      </div>
    </Fragment>
  );
}
export default GalleryCard;

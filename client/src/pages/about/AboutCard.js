import { Fragment } from 'react';
import aboutStyles from './about.module.css';

function AboutCard(props) {
  if (!props.about) {
    return null;
  }
  return (
    <Fragment>
      <div className={`${aboutStyles.about__card} `}>
        <div className={`${aboutStyles.about__title}`}>
          <h1>About Me</h1>
        </div>
        <p>
          Every company want's to build amazing products that are not just
          addictive for the customers but also scales. Products that will also
          deliver on measurable values. And I am the Software engineer to bring
          that to life.
        </p>
        <p>
          Every company want's to build amazing products that are not just
          addictive for the customers but also scales. Products that will also
          deliver on measurable values. And I am the Software engineer to bring
          that to life.
        </p>
        <a href="#">Read more</a>
      </div>
    </Fragment>
  );
}

export default AboutCard;

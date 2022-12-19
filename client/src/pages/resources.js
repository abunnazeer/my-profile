import { Fragment } from 'react';
import Layout from '../components/layout/Layout';
import resourcesStyles from './resources.module.css';

const Resources = () => {
  return (
    <Fragment>
      <Layout />
      <section className={resourcesStyles.main__section}>
        <div className={resourcesStyles.space__out}></div>
        <section className={resourcesStyles.about__me_flex}>
          <div
            className={`${resourcesStyles.about__me} ${resourcesStyles.about__card__container} `}
          >
            <div className={`${resourcesStyles.about__card} `}>
              <div className={`${resourcesStyles.about__title}`}>
                <h1>About Me</h1>
              </div>
              <p>
                Every company want's to build amazing products that are not just
                addictive for the customers but also scales. Products that will
                also deliver on measurable values. And I am the Software
                engineer to bring that to life.
              </p>
              <p>
                Every company want's to build amazing products that are not just
                addictive for the customers but also scales. Products that will
                also deliver on measurable values. And I am the Software
                engineer to bring that to life.
              </p>
              <a href="#"> Read more</a>
            </div>
          </div>

          <div className={resourcesStyles.sidebar}>
            <div className={resourcesStyles.sidebar__card}>
              <h1>resources</h1>
              <ul>
                <a href="">
                  <li>ABOUT ME</li>
                </a>
                <li>EXPERIENCE</li>
                <li>EDUCATION</li>
                <li>CERTIFCATION</li>
                <li>PUBLICATION</li>
                <li>GALAERY</li>
                <li>SKILLS</li>
              </ul>
            </div>
            <div className={resourcesStyles.sidebar__card}>
              <h1>recent activities</h1>
              <ul>
                <a href="">
                  <li>ABOUT ME</li>
                </a>
                <li>EXPERIENCE</li>
                <li>EDUCATION</li>
                <li>CERTIFCATION</li>
                <li>PUBLICATION</li>
                <li>GALAERY</li>
                <li>SKILLS</li>
              </ul>
            </div>
          </div>
        </section>
      </section>
      <div className={resourcesStyles.space__out}></div>
    </Fragment>
  );
};

export default Resources;

import Layout from '../components/layout/Layout';
import { Fragment } from 'react';
import showcaseStyles from './showcase.module.css';

const Showcase = () => {
  return (
    <Fragment>
      <Layout />
      <section className={showcaseStyles.showcase__main}>
        <div className={showcaseStyles.showcase__filter}>
          <ul>
            <li className={showcaseStyles.active}>All Projects</li>
            <li>Mobile App</li>
            <li>Web App</li>
            <li>Design</li>
          </ul>
        </div>
        <div className={showcaseStyles.shwocase__card}>
          <div className={showcaseStyles.showcase__image}>
            <img src="../../assets/img/abdullahi.jpeg" />
          </div>
          <div className={showcaseStyles.showcase__content}>
            <h1>PROJECT NAME</h1>
            <p>
              Every company want's to build amazing products that are not just
              addictive for the customers but also scales. Products that will
              also deliver on measurable values. And I am the Software engineer
              to bring that to life.
            </p>
            <a className={showcaseStyles.showcase__readmore}>Read More</a>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Showcase;

import Layout from '../../components/layout/Layout';
import { Fragment } from 'react';
import showcaseStyles from './showcase.module.css';

const Showcase = () => {
  return (
    <Fragment>
      <Layout />
      <section className={showcaseStyles.project__container}>
        <div className={showcaseStyles.latest__projects}>
          <div className={showcaseStyles.main__container}>
            <h1 className={showcaseStyles.title}>Latest Projects</h1>
            <div className={showcaseStyles.project__container}>
              <div className={showcaseStyles.project__box}>
                <a href="#">
                  <img src="assets/img/projects/core-working.jpg" alt="" />
                  <div className={showcaseStyles.overlay}>
                    <h2 className={showcaseStyles.project__title}>
                      Core-working Space
                    </h2>
                  </div>
                </a>
              </div>
              <div className={showcaseStyles.project__box}>
                <a href="#">
                  <img src="assets/img/projects/core-working.jpg" alt="" />
                  <div className={showcaseStyles.overlay}>
                    <h2 className={showcaseStyles.project__title}>
                      Core-working Space
                    </h2>
                  </div>
                </a>
              </div>
              <div className={showcaseStyles.project__box}>
                <a href="#">
                  <img src="assets/img/projects/core-working.jpg" alt="" />
                  <div className={showcaseStyles.overlay}>
                    <h2 className={showcaseStyles.project__title}>
                      Core-working Space
                    </h2>
                  </div>
                </a>
              </div>
              <div className={showcaseStyles.project__box}>
                <a href="#">
                  <img src="assets/img/projects/core-working.jpg" alt="" />
                  <div className={showcaseStyles.overlay}>
                    <h2 className={showcaseStyles.project__title}>
                      Core-working Space
                    </h2>
                  </div>
                </a>
              </div>
              <div className={showcaseStyles.project__box}>
                <a href="#">
                  <img src="assets/img/projects/core-working.jpg" alt="" />
                  <div className={showcaseStyles.overlay}>
                    <h2 className={showcaseStyles.project__title}>
                      Core-working Space
                    </h2>
                  </div>
                </a>
              </div>
              <div className={showcaseStyles.project__box}>
                <a href="#">
                  <img src="assets/img/projects/core-working.jpg" alt="" />
                  <div className={showcaseStyles.overlay}>
                    <h2 className={showcaseStyles.project__title}>
                      Core-working Space
                    </h2>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Showcase;

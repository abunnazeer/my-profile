import { Fragment } from 'react';
import Config from './Config';
import styles from './config.module.css';

function ManageExperiences() {
  return (
    <Fragment>
      <Config />
      <section className={styles.content}>
        <h1>manage Expriences</h1>
      </section>
    </Fragment>
  );
}

export default ManageExperiences;

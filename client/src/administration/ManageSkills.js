import { Fragment } from 'react';
import Config from './Config';
import styles from './config.module.css';

function ManageSkills() {
  return (
    <Fragment>
      <Config />
      <section className={styles.content}>
        <h1>manage Skills</h1>
      </section>
    </Fragment>
  );
}

export default ManageSkills;

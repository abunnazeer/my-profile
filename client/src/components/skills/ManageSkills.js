import { Fragment } from 'react';
import Config from '../../administration/Config';
import styles from '../../administration/config.module.css';

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

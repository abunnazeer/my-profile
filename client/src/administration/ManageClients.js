import { Fragment } from 'react';
import Config from './Config';
import styles from './config.module.css';

function ManageClients() {
  return (
    <Fragment>
      <Config />
      <section className={styles.content}>
        <h1>manage Clients</h1>
      </section>
    </Fragment>
  );
}

export default ManageClients;

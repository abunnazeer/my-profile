import { Fragment, useState } from 'react';
import Config from '../../administration/Config';
import styles from '../../administration/config.module.css';
import ClientForm from './ClientForm';
import ClientIndex from './ClientIndex';
import Overlay from '../../administration/overlay';
import indexStyles from '../../administration/index.module.css';

function ManageClients() {
  const [show, setShow] = useState(false);
  return (
    <Fragment>
      <Config />
      <Overlay onClose={() => setShow(false)} show={show} />
      <section className={styles.content}>
        <h1>MANAGE CLIENTS</h1>
        <button
          className={indexStyles.index__add__new__btn}
          onClick={() => setShow(true)}
        >
          <i className="fa-solid fa-plus"></i>Add
        </button>
        <ClientForm onClose={() => setShow(false)} show={show} />
        <ClientIndex />
      </section>
    </Fragment>
  );
}

export default ManageClients;

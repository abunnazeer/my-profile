import { Fragment, useState } from 'react';
import Config from '../../administration/Config';
import styles from '../../administration/config.module.css';
import ExperienceForm from './ExperienceForm';
import ExperienceIndex from './ExperienceIndex';
import Overlay from '../../administration/overlay';
import indexStyles from '../../administration/index.module.css';

function ManageExperiences() {
  const [show, setShow] = useState(false);
  return (
    <Fragment>
      <Config />
      <Overlay onClose={() => setShow(false)} show={show} />
      <section className={styles.content}>
        <h1>MANAGE EXPERIENCE</h1>
        <button
          className={indexStyles.index__add__new__btn}
          onClick={() => setShow(true)}
        >
          <i className="fa-solid fa-plus"></i>Add
        </button>
        <ExperienceForm onClose={() => setShow(false)} show={show} />
        <ExperienceIndex />
      </section>
    </Fragment>
  );
}

export default ManageExperiences;

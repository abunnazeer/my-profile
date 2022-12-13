import { Fragment, useState } from 'react';
import Config from '../../administration/Config';
import styles from '../../administration/config.module.css';
import ProjectsFrom from './ProjectsForm';
import ProjectsIndex from './ProjectsIndex';
import indexStyles from './projectsIndex.module.css';
import Overlay from './overlay';

function ManageProjects() {
  const [show, setShow] = useState(false);
  return (
    <Fragment>
      <Config />
      <Overlay onClose={() => setShow(false)} show={show} />
      <section className={styles.content}>
        <h1>MANAGE PROJECTS</h1>
        <button
          className={indexStyles.index__add__new__btn}
          onClick={() => setShow(true)}
        >
          <i className="fa-solid fa-plus"></i>Add
        </button>
        <ProjectsFrom onClose={() => setShow(false)} show={show} />
        <ProjectsIndex />
      </section>
    </Fragment>
  );
}

export default ManageProjects;

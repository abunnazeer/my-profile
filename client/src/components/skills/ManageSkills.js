import { Fragment, useState } from 'react';
import Config from '../../administration/Config';
import styles from '../../administration/config.module.css';
import SkillFrom from './SkillForm';
import SkillsIndex from './SkillsIndex';
import Overlay from '../../administration/overlay';
import indexStyles from '../../administration/index.module.css';

function ManageSkills() {
  const [show, setShow] = useState(false);
  return (
    <Fragment>
      <Config />
      <Overlay onClose={() => setShow(false)} show={show} />
      <section className={styles.content}>
        <h1>MANAGE SKILLS</h1>
        <button
          className={indexStyles.index__add__new__btn}
          onClick={() => setShow(true)}
        >
          <i className="fa-solid fa-plus"></i>Add
        </button>
        <SkillFrom onClose={() => setShow(false)} show={show} />
        <SkillsIndex />
      </section>
    </Fragment>
  );
}

export default ManageSkills;

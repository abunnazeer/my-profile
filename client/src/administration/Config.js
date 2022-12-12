import { Fragment } from 'react';

import styles from './config.module.css';
import { Link, NavLink } from 'react-router-dom';

function Config() {
  return (
    <Fragment>
      <section className={styles.container}>
        <aside className={styles.side__bar}>
          <Link to="/">
            <img src="assets/logo.png" alt="logo" srcSet="" />
          </Link>
          <ul className={styles.side__items}>
            <li className={styles.side__item}>
              <NavLink className={styles.active} to="/settings">
                <i className="fa-regular fa-folder-open "></i>
                Site Setting
              </NavLink>
            </li>
            <li className={styles.side__item}>
              <NavLink to="/manage-projects">
                <i className="fa-regular fa-folder-open mr__half"></i>
                Manage Project
              </NavLink>
            </li>
            <li className={styles.side__item}>
              <NavLink to="/manage-skills">
                <i className="fa-regular fa-folder-open mr__half"></i>
                Manage Skills
              </NavLink>
            </li>
            <li className={styles.side__item}>
              <NavLink to="/manage-experiences">
                <i className="fa-regular fa-folder-open mr__half"></i>
                Manage Expriences
              </NavLink>
            </li>
            <li className={styles.side__item}>
              <NavLink to="/manage-clients">
                <i className="fa-regular fa-folder-open mr__half"></i>
                Manage Clients
              </NavLink>
            </li>
          </ul>
        </aside>
      </section>

      <section className={styles.main__content}>
        <div className={styles.header}>
          <div>
            <h1> Dashboard</h1>
          </div>
          <div>
            <form>
              <input type="text" placeholder="Search" />
              <button type="search">Search</button>
            </form>
          </div>
        </div>
      </section>
      <section className={styles.content}>
        <h1>General Settings</h1>
      </section>
    </Fragment>
  );
}

export default Config;

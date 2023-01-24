import styles from './header.module.scss';

const Header = () => {
  return (
    <nav className={styles.header}>
      <div className={styles.display__flex}>
        <a href="/" className={styles.rm_hover}>
          <img src="./../assets/logo.png" alt="logo" srcSet="" />
        </a>

        <ul className={styles.links}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>

        <a className={styles.btn} href="#contact">
          CONTACT
        </a>
        {/* <a className="custom-btn lets-talk" href="settings">
          LOGIN
        </a> */}
      </div>
    </nav>
  );
};

export default Header;

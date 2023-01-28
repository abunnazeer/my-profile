import styles from './header.module.scss';
import { menu } from './Menu';

const Header = () => {
  const handleClick = e => {
    e.preventDefault();
    const target = e.target.getAttribute('href');
    const element = document.querySelector(target).offsetTop;
    window.scrollTo({ lef: 0, top: element - 68 });
  };
  return (
    <nav className={styles.header}>
      <div className={styles.display__flex}>
        <a href="/" className={styles.rm_hover}>
          <img src="./../assets/logo.png" alt="logo" srcSet="" />
        </a>

        <ul className={styles.links}>
          {menu.slice(0, 4).map(item => {
            return (
              <li key={item.id}>
                <a href={item.url} onClick={handleClick}>
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>

        <a className={styles.btn} href="#contact" onClick={handleClick}>
          CONTACT
        </a>
      </div>
    </nav>
  );
};

export default Header;

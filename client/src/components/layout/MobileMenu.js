import styles from './mobileMenu.module.scss';
import { menu } from './Menu';
const MobileMenu = () => {
  const handleClick = e => {
    e.preventDefault();
    const target = e.target.getAttribute('href');
    const element = document.querySelector(target).offsetTop;
    window.scrollTo({ lef: 0, top: element - 68 });
    console.log(e.target);
  };
  return (
    <footer className={styles.mobile__nav}>
      <ul>
        {menu.map(item => {
          return (
            <li key={item.id}>
              {item.icon}
              <a href={item.url} onClick={handleClick}>
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </footer>
  );
};

export default MobileMenu;

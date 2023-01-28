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

        {/* <li className="list__item ">
          <a href="#about">
            <i className="fa-solid fa-house mr__half"></i>
            About
          </a>
        </li>

        <li className="list__item ">
          <a href="#projects">
            <i className="fa-regular fa-folder-open mr__half"></i>
            Projects
          </a>
        </li>

        <li className="list__item ">
          <a href="#skills">
            <i className="fa-sharp fa-solid fa-id-card mr__half"></i>
            Skills
          </a>
        </li>

        <li className="list__item ">
          <a href="#contact">
            <i className="fa-sharp fa-solid fa-id-card mr__half"></i>
            Contact
          </a>
        </li> */}
      </ul>
    </footer>
  );
};

export default MobileMenu;

import Hnadle from '../Handle';
import styles from './footer.module.scss';
const Footer = props => {
  return (
    <div className={styles.footer}>
      <h1>All rights reserved</h1>
      <Hnadle />
    </div>
  );
};

export default Footer;

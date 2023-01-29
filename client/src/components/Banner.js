import styles from './banner.module.scss';

const Banner = () => {
  return (
    <section className={styles.hero} id="home">
      <h1 className={styles.title}>I AM AHMAD</h1>
      <h1 className={styles.sub__title}>A SOFTWARE DEVELOPER IN NIGERIA</h1>
      <a
        href="https://github.com/abunnazeer"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.btn__primary}
      >
        GITHUB <i className={`fa-brands fa-github`}></i>
      </a>
      <a
        href="https://abunnazeer.com.ng/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.btn__secondary}
      >
        DOWNLOAD CV <i className="fa-solid fa-file"></i>
      </a>
    </section>
  );
};
export default Banner;

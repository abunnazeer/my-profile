import styles from './banner.module.scss';

const Banner = () => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>I AM AHMAD</h1>
      <h1 className={styles.sub__title}>A SOFTWARE DEVELOPER IN NIGERIA</h1>
      <button className="btn btn__black">Gethub</button>
      <button className="btn btn__white">Download CV</button>
    </section>
  );
};
export default Banner;

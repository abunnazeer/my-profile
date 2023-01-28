import styles from './banner.module.scss';

const Banner = () => {
  return (
    <section className={styles.hero} id="home">
      <h1 className={styles.title}>I AM AHMAD</h1>
      <h1 className={styles.sub__title}>A SOFTWARE DEVELOPER IN NIGERIA</h1>
      <button className="btn btn__black">
        GITHUB <i className={`fa-brands fa-github`}></i>
      </button>
      <button className="btn btn__white">
        DOWNLOAD CV <i class="fa-solid fa-file"></i>
      </button>
    </section>
  );
};
export default Banner;

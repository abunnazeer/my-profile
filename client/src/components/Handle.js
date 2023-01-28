import styles from './handle.module.scss';
const Hnadle = props => {
  return (
    <div
      style={{
        position: props.name,
        top: props.top,
        left: props.left,
      }}
    >
      <a
        href="https://www.linkedin.com/in/abunnazeer/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i
          className={`fab fa-linkedin-in  ${styles.icon}`}
          style={{ display: props.block }}
        ></i>
      </a>
      <a
        href="https://twitter.com/abunnazeer"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i
          className={`fa-brands  fa-twitter ${styles.icon}`}
          style={{ display: props.block }}
        ></i>
      </a>
      <a
        href="http://github.com/abunnazeer"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i
          className={`fa-brands fa-github  ${styles.icon}`}
          style={{ display: props.block }}
        ></i>
      </a>
    </div>
  );
};

export default Hnadle;

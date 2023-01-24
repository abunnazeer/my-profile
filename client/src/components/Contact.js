import styles from './contact.module.scss';

const Contact = () => {
  return (
    <section className={styles.contact} id="contact">
      <h1>Get In Touch With Me</h1>
      <div className={styles.form}>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea type="text" placeholder="Message" />
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};
export default Contact;

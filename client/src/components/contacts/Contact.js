import React from 'react';

function Contact() {
  return (
    <section className="contact-me">
      <h1 className="title tc__white ">Let's Talk</h1>
      <form className="form-box">
        <div className="contact-style form-setting">
          <input type="text" placeholder="Your name" />
        </div>
        <div className="contact-style form-setting">
          <input type="text" placeholder="Your email" />
        </div>
        <div className="contact-style form-setting">
          <textarea
            name=""
            id=""
            cols="58"
            rows="10"
            placeholder="Project details"
          ></textarea>
        </div>
        <button className="contact__btn">Send</button>
      </form>
    </section>
  );
}
export default Contact;

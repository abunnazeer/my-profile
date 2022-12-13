import React from "react";

function Banner() {
  return (
    <section className="banner mobile__banner">
      <div className="intro__container">
        <div className="intro">
          <h1 className="intro__title">I AM AHMAD</h1>
          <h3 className="sub__title">A SOFTWARE DEVELOPER IN NIGERIA</h3>
        </div>
        <button className="btn btn__black">Get a project?</button>
        <button className="btn btn__white">Hire me</button>
      </div>
      <section className="social__container">
        <div className="social-card youtube">
          <div className="icon-text">
            <a
              href="https://www.youtube.com/abunnazeer"
              target="_blank"
              rel="noreferrer"
            >
              <img src="assets/icons/youtube.png" alt="a" />
              <h2>Youtube</h2>
            </a>
          </div>
          <p>New videos every week.</p>
        </div>
        <div className="social-card github">
          <div className="icon-text">
            <a
              href="https://github.com/abunnazeer"
              target="_blank"
              rel="noreferrer"
            >
              <img src="assets/icons/github.png" alt="a" />
              <h2>Github</h2>
            </a>
          </div>
          <p>Check my repo for more.</p>
        </div>
        <div className="social-card handle">
          <div className="icon-text">
            <img src="assets/icons/handles.png" alt="a" />
            <h2>Find me on</h2>
          </div>
          <button>
            <a
              href="https://twitter.com/abunnazeer"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
          </button>
          <button>
            <a
              href="https://www.instagram.com/abunnazeer"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </button>
          <button>
            <a
              href="https://www.linkedin.com/in/abunnazeer"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
          </button>
        </div>
      </section>
      <div className="social-card news-letter">
        <div className="icon-text">
          <img src="assets/icons/newsletter.png" alt="a" />
          <h2>News letter</h2>
        </div>
        <input
          type="email"
          name="newsletter"
          id=""
          placeholder="Your email here"
        />
        <button>Subscribe</button>
      </div>
    </section>
  );
}
export default Banner;

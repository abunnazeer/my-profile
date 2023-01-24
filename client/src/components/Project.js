import React, { useEffect, useState } from 'react';
// import Card from './ProjectCard';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub } from '@fortawesome/pro-solid-svg-icons';
import styles from './project.module.scss';

const Url = 'http://localhost:8000';
const Project = () => {
  const [project, setProject] = useState([]);
  const projectData = async url => {
    const response = await fetch(url + '/projects');
    const data = await response.json();
    setProject(data);
  };
  useEffect(() => {
    projectData(Url);
  }, []);
  return (
    <section className={styles.projects} id="projects">
      <h1 className="title">Latest Projects</h1>
      <div className={styles.display__grid}>
        {/* {project.map(function (item, id) {
          return (
            <Card
              img={item.imagepath}
              name={item.title}
              key={id}
              slug={item.slug}
            />
          );
        })} */}

        <div className={styles.card}>
          <img src="assets/img/projects/core-working.jpg" alt="logo" />
          <h2>Core-working Space</h2>
          <p>
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been
          </p>

          <a href="#">
            <i className={`fa-brands fa-github ${styles.icon}`}></i>
          </a>
          <a href="#">
            <i className={`fa-sharp fa-solid fa-link ${styles.icon}`}></i>
          </a>
        </div>
        <div className={styles.card}>
          <img src="assets/img/projects/core-working.jpg" alt="logo" />
          <h2>Core-working Space</h2>
          <p>
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been
          </p>

          <a href="#">
            <i className={`fa-brands fa-github ${styles.icon}`}></i>
          </a>
          <a href="#">
            <i className={`fa-sharp fa-solid fa-link ${styles.icon}`}></i>
          </a>
        </div>
        <div className={styles.card}>
          <img src="assets/img/projects/core-working.jpg" alt="logo" />
          <h2>Core-working Space</h2>
          <p>
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been
          </p>

          <a href="#">
            <i className={`fa-brands fa-github ${styles.icon}`}></i>
          </a>
          <a href="#">
            <i className={`fa-sharp fa-solid fa-link ${styles.icon}`}></i>
          </a>
        </div>
        <div className={styles.card}>
          <img src="assets/img/projects/core-working.jpg" alt="logo" />
          <h2>Core-working Space</h2>
          <p>
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been
          </p>

          <a href="#">
            <i className={`fa-brands fa-github ${styles.icon}`}></i>
          </a>
          <a href="#">
            <i className={`fa-sharp fa-solid fa-link ${styles.icon}`}></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Project;

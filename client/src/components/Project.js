import React, { useEffect, useState } from 'react';
import styles from './project.module.scss';
import { data } from '../components/data';
const Url = 'http://localhost:8000';
const Project = () => {
  // console.log(data.length);
  // const [project, setProject] = useState([]);
  // const projectData = async url => {
  //   const response = await fetch(url + '/projects');
  //   const data = await response.json();
  //   setProject(data);
  // };
  // useEffect(() => {
  //   projectData(Url);
  // }, []);
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
        {data.map(item => {
          return (
            <div className={styles.card} key={item.id}>
              <img src={item.imagepath} alt="logo" />
              <h2>{item.title}</h2>
              <p>{item.desc}</p>

              <a href={item.github} target="_blank" rel="noopener noreferrer">
                <i className={`fa-brands fa-github ${styles.icon}`}></i>
              </a>
              <a href={item.demo} target="_blank" rel="noopener noreferrer">
                <i className={`fa-sharp fa-solid fa-link ${styles.icon}`}></i>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Project;

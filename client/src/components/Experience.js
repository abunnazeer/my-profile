import React, { useEffect, useState } from 'react';
import ExperienceCard from './/ExperienceCard';
import styles from './experience.module.scss';

const Experience = () => {
  const Url = 'http://localhost:8000';
  const [experience, setExperience] = useState([]);
  async function experienceData(url) {
    const response = await fetch(url + '/experiences');
    const data = await response.json();
    setExperience(data);
  }
  useEffect(() => {
    experienceData(Url);
  }, []);
  return (
    <section className={styles.about__me} id="about">
      <h1 className={styles.title}>About Me</h1>
      <p className={styles.intro}>
        A Software developer with experience in developing enterprise web
        applications using | HTML | CSS | JAVASCRIPT | NODE JS | EXPRESS |
        MongoDB.
      </p>
      <h1 className={styles.title}>Experience</h1>
      {experience.slice(0, 5).map((items, id) => {
        return (
          <ExperienceCard
            key={id}
            duration={items.duration}
            title={items.jobTitle}
            companyName={items.companyName}
          />
        );
      })}
    </section>
  );
};
export default Experience;

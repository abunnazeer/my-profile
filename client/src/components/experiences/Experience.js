import React, { useEffect, useState } from 'react';
import ExpCard from './ExperienceCard';

function Experience() {
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
    <section className="skills__experience">
      <div className="about__i">
        <h1 className="title">About Me</h1>
        <p id="ex-desc">
          A Software developer with experience in developing enterprise web
          applications using | HTML | CSS | JAVASCRIPT | NODE JS | EXPRESS |
          MongoDB.
        </p>
      </div>

      <div className="working-experience-box">
        <h1 className="title">Working Experience</h1>
        {experience.map((items, id) => {
          return (
            <ExpCard
              key={id}
              duration={items.duration}
              jobTitle={items.jobTitle}
              companyName={items.companyName}
            />
          );
        })}
      </div>
    </section>
  );
}
export default Experience;

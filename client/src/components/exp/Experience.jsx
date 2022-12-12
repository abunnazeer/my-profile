import React, { useEffect, useState } from 'react';
import ExpCard from './ExpCard';
import experienceData from './expData';
function Experience() {
  const Url = 'http://127.0.0.1:8000';
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
          A professional front-end developer with experience in developing
          enterprise web and mobile applications and passionate about building
          cutting edge technology solution
        </p>
      </div>

      <div className="working-experience-box">
        <h1 className="title">Working Experience</h1>
        {experience.map(items => {
          return (
            <ExpCard
              key={items.id}
              yex={items.expDate}
              jtitle={items.expTitle}
              comp={items.expCompany}
            />
          );
        })}
      </div>
    </section>
  );
}
export default Experience;

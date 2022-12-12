import React, { useEffect, useState } from 'react';
import SkillsCard from './SkillsCard';

function Lang() {
  const Url = 'http://127.0.0.1:8000';
  const [skill, setSkill] = useState([]);
  async function skillData(url) {
    const response = await fetch(url + '/skills');
    const data = await response.json();
    setSkill(data);
  }
  useEffect(() => {
    skillData(Url);
  }, []);
  return (
    <section className="language__tools">
      <h1 className="title">Language & tools</h1>
      <div className="skills">
        {skill.map(items => {
          return (
            <SkillsCard
              icons={items.icon}
              skills={items.skill}
              key={items.id}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Lang;

import React, { useEffect, useState } from 'react';
import SkillsCard from './SkillsCard';
import styles from './skills.module.scss';

const Skills = () => {
  const Url = 'https://abunnazeer.com.ng';
  const [skill, setSkill] = useState([]);
  const skillData = async url => {
    const response = await fetch(url + '/skills');
    const data = await response.json();
    setSkill(data);
  };
  useEffect(() => {
    skillData(Url);
  }, []);
  return (
    <section className={styles.skills} id="skills">
      <h1 className={styles.title}>Language & tools</h1>
      <div className={styles.display__grid}>
        {skill.map((items, id) => {
          return (
            <SkillsCard icons={items.icon} skills={items.skill} key={id} />
          );
        })}
      </div>
    </section>
  );
};

export default Skills;

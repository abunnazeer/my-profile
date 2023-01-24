import React from 'react';
import styles from './experience.module.scss';

const ExperienceCard = props => {
  return (
    <div className={styles.experience}>
      <div className={styles.duration}>{props.duration}</div>
      <div className={styles.position}>
        <h3>{props.title}</h3>
        <p>{props.companyName}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;

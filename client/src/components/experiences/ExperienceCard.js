import React from 'react';

function ExperienceCard(props) {
  return (
    <div className="working__experience">
      <div className="year__activities">{props.duration}</div>
      <div className="job__position">
        <h3>{props.jobTitle}</h3>
        <p>{props.companyName}</p>
      </div>
    </div>
  );
}

export default ExperienceCard;

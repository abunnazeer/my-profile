import React from 'react';

function SkillsCard(props) {
  return (
    <div className="skill__box">
      <div className="skill__icon">
        <img src={props.icons} alt="" />
      </div>
      <h3>{props.skills}</h3>
    </div>
  );
}
export default SkillsCard;

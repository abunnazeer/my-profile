import React from "react";

function ExpCard(props) {
  return (
    <div className="working__experience">
      <div className="year__activities">{props.yex}</div>
      <div className="job__position">
        <h3>{props.jtitle}</h3>
        <p>{props.comp}</p>
      </div>
    </div>
  );
}

export default ExpCard;

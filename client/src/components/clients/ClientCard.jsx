import React from 'react';

function ClientCard(props) {
  return (
    <div className="client__box">
      <img src={props.img} alt="a" />
    </div>
  );
}

export default ClientCard;

import React from 'react';

function Card(props) {
  return (
    <div className="project__box">
      <a href="#">
        <img src={props.img} alt="a" />
        <div className="overlay">
          <h2 className="project__title">{props.name}</h2>
        </div>
      </a>
    </div>
  );
}
export default Card;

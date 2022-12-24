import React from 'react';
import { Link } from 'react-router-dom';

function Card(props) {
  return (
    <div className="project__box">
      <Link to={`/showcase/${props.slug}`}>
        <img src={props.img} alt="a" />
        <div className="overlay">
          <h2 className="project__title">{props.name}</h2>
        </div>
      </Link>
    </div>
  );
}
export default Card;

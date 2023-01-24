const Card = props => {
  return (
    <div>
      {props.duration}
      {props.title}
      {props.companyName}
    </div>
  );
};

export default Card;

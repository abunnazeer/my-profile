import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import indexStyles from './index.module.css';
function IndexCard(props) {
  return (
    <Fragment>
      <div className={`${indexStyles.index__body}`}>
        <div className={indexStyles.project__name}>
          <h2>{props.name}</h2>
        </div>
        <div className={indexStyles.project__img}>
          <img src={props.img} alt="" />
        </div>
        <div className={indexStyles.action}>
          <Link to="#" className={indexStyles.delete}>
            <i className="fa-solid fa-trash"></i>
          </Link>
          <Link to="#" className={indexStyles.update}>
            <i className="fa-solid fa-pen-to-square"></i>
          </Link>
        </div>
      </div>
    </Fragment>
  );
}

export default IndexCard;

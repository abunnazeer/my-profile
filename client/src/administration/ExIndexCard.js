import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import indexStyles from './index.module.css';
function ExIndexCard(props) {
  return (
    <Fragment>
      <div className={`${indexStyles.index__body}`}>
        <div className={indexStyles.ex__duration}>
          <h3>{props.duration}</h3>
        </div>
        <div className={indexStyles.ex__title}>
          <h2>{props.jobTitle}</h2>
        </div>
        <div className={indexStyles.ex__campany}>
          <h2>{props.companyName}</h2>
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

export default ExIndexCard;

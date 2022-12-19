import { Fragment } from 'react';
import indexStyles from './index.module.css';

export default function IndexBody() {
  return (
    <Fragment>
      <div className={`${indexStyles.index__container}`}>
        <div>
          <h1>TITLE</h1>
        </div>
        <div>
          <h1>IMAGE</h1>
        </div>
        <div>
          <h1>ACTION</h1>
        </div>
      </div>
    </Fragment>
  );
}

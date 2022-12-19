import { Fragment } from 'react';
import indexStyles from './index.module.css';

export default function ExIndexHeader() {
  return (
    <Fragment>
      <div className={indexStyles.index__header}>
        <div>
          <h1>DURATIONO</h1>
        </div>
        <div>
          <h1>JOB TITLE</h1>
        </div>
        <div>
          <h1>COMPANY NAME</h1>
        </div>
        <div>
          <h1>ACTION</h1>
        </div>
      </div>
    </Fragment>
  );
}

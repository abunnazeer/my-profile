import { Fragment } from 'react';
import overlay from './overlay.module.css';

function Overlay(props) {
  if (!props.show) {
    return null;
  }
  return (
    <Fragment>
      <section
        className={overlay.form__overlay}
        onClick={props.onClose}
      ></section>
    </Fragment>
  );
}

export default Overlay;

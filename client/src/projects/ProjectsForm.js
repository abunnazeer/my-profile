import { Fragment } from 'react';
import formStyles from './projectform.module.css';

function ProjectsFrom(props) {
  if (!props.show) {
    return null;
  }
  return (
    <Fragment>
      <div className={formStyles.form__container}>
        <button className={formStyles.form__close} onClick={props.onClose}>
          x
        </button>
        <form className={formStyles.form__content}>
          <input type="text" placeholder="Project title" />
          <div className={formStyles.form__image}>
            <label htmlFor="image">
              Select Project <br />
              <i className="fa fa-2x fa-camera"></i>
              <input id="image" type="file" />
              <br />
              <span id="imageName"></span>
            </label>
          </div>
          <input type="url" placeholder="Github Address" />
          <input type="url" placeholder="Demo Address" />
          <div className={formStyles.form__check}>
            <input type="checkbox" id="nodejs" name="nodejs" value="nodejs" />
            <label htmlFor="nodejs">Node Js</label>
            <input
              type="checkbox"
              id="reactjs"
              name="reactjs"
              value="reactjs"
            />
            <label htmlFor="reactjs"> React</label>
            <input
              type="checkbox"
              id="express"
              name="express"
              value="express"
            />
            <label htmlFor="express">Express</label>
          </div>
          <div className={formStyles.form__submit}>
            <button type="submit">Add</button>
          </div>
        </form>
      </div>
    </Fragment>
  );
}

export default ProjectsFrom;

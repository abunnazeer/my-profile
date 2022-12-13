import { Fragment, useState, useRef } from 'react';

// import { json } from 'react-router-dom';
// import axios from 'axios';
import formStyles from './projectform.module.css';

function ProjectsFrom(props) {
  const title = useRef('');
  // const image = useRef('');
  const github = useRef('');
  const demo = useRef('');

  async function handleSubmit(event) {
    event.preventDefault();

    const project = {
      title: title.current.value,
      // image: image.current.value,
      github: github.current.value,
      demo: demo.current.value,
    };

    await fetch('http://localhost:8000/projects', {
      method: 'POST',
      body: JSON.stringify(project),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(project);
    //image: event.target.elements.img.value,
    // github: event.target.elements.github.value,
    // demo: event.target.elements.demo.value,
    // tools: event.target.elements.tools.values,
  }
  if (!props.show) {
    return null;
  }
  return (
    <Fragment>
      <div className={formStyles.form__container}>
        <button className={formStyles.form__close} onClick={props.onClose}>
          x
        </button>
        <form className={formStyles.form__content} onSubmit={handleSubmit}>
          <input type="text" placeholder="Project title" ref={title} />
          <div className={formStyles.form__image}>
            <label htmlFor="image">
              Select Project <br />
              <i className="fa fa-2x fa-camera"></i>
              <input id="image" type="file" />
              <br />
              <span id="imageName"></span>
            </label>
          </div>
          <input type="url" placeholder="Github Address" ref={github} />
          <input type="url" placeholder="Demo Address" ref={demo} />
          <div className={formStyles.form__check}>
            <input type="checkbox" id="nodejs" name="tools" value="nodejs" />
            <label htmlFor="nodejs">Node Js</label>
            <input type="checkbox" id="reactjs" name="tools" value="reactjs" />
            <label htmlFor="reactjs"> React</label>
            <input type="checkbox" id="express" name="tools" value="express" />
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

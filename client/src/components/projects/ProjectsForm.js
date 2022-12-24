import { Fragment, useState, useEffect } from 'react';
import formStyles from '../../administration/form.module.css';

function ProjectsFrom(props) {
  const [error, setError] = useState({});
  const [isSubmit, setIsSubmit] = useState(true);
  const [inputValue, setInputValue] = useState({
    title: '',
    imagepath: '',
    github: '',
    demo: '',
  });

  // form values
  const handleChange = e => {
    const { name, value } = e.target;
    setInputValue(prev => {
      return { ...prev, [name]: value };
    });
  };

  // // Error Handling
  const handleError = event => {
    const errors = {};
    if (!event.title) {
      errors.title = 'Title is required';
    }
    if (!event.imagepath) {
      errors.imagepath = 'Image is required';
    }
    if (!event.github) {
      errors.github = 'github url is required';
    }
    if (!event.demo) {
      errors.demo = 'demo url is required';
    }
    return errors;
  };

  useEffect(() => {
    if (Object.keys(error).length === 0 && isSubmit) {
    }
  }, [error]);
  // submit function
  const onSubmit = async event => {
    event.preventDefault();
    // post to the end point
    await fetch('http://localhost:8000/projects', {
      method: 'POST',
      body: JSON.stringify(inputValue),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    setError(handleError(inputValue));
    setIsSubmit(true);
  };

  if (!props.show) {
    return null;
  }
  return (
    <Fragment>
      <div className={formStyles.form__container}>
        <button className={formStyles.form__close} onClick={props.onCloseForm}>
          x
        </button>

        <form onSubmit={onSubmit} className={formStyles.form__content}>
          <div className={error.title ? formStyles.error : formStyles.valid}>
            <input
              type="text"
              placeholder={error.title ? error.title : 'Project Title'}
              name="title"
              onChange={handleChange}
            />
          </div>

          <div
            className={error.imagepath ? formStyles.error : formStyles.valid}
          >
            <input
              type="file"
              placeholder="Image Url"
              name="imagepath"
              onChange={handleChange}
            />
          </div>
          <div className={error.github ? formStyles.error : formStyles.valid}>
            <input
              type="url"
              placeholder={error.github ? error.github : 'Github Address'}
              name="github"
              onChange={handleChange}
            />
          </div>
          <div className={error.demo ? formStyles.error : formStyles.valid}>
            <input
              type="url"
              placeholder={error.demo ? error.demo : 'Demo Address'}
              name="demo"
              onChange={handleChange}
            />
          </div>
          <div className={formStyles.form__check}>
            <input type="checkbox" id="node" name="tools" value="node" />
            <label htmlFor="node">Node Js</label>
            <input type="checkbox" id="react" name="tools" value="react" />
            <label htmlFor="react"> React</label>
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

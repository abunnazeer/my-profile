import { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import formStyles from './projectform.module.css';
import axios from 'axios';

function ProjectsFrom(props) {
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors },
  } = useForm();

  const onSubmit = async data => {
    const res = await fetch('http://localhost:8000/projects', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        // 'Content-type': 'multipart/form-data',
      },
    });
    console.log(data.imagePath[0].name);
  };

  if (!props.show) {
    return null;
  }
  return (
    <Fragment>
      <div className={formStyles.form__container}>
        <button className={formStyles.form__close} onClick={props.onClose}>
          x
        </button>

        <form
          className={formStyles.form__content}
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="text"
            placeholder="Project title"
            {...register('title')}
          />
          {errors.title && <span>This field is required</span>}
          <div className={formStyles.form__image}>
            <label htmlFor="image">
              Select Project <br />
              <i className="fa fa-2x fa-camera"></i>
              <input id="image" type="file" {...register('imagePath')} />
              {errors.imagePath && <span>This field is required</span>}
              <br />
              <span id="imageName"></span>
            </label>
          </div>
          <input
            type="url"
            placeholder="Github Address"
            {...register('github')}
          />
          {errors.github && <span>This field is required</span>}
          <input type="url" placeholder="Demo Address" {...register('demo')} />
          {errors.demo && <span>This field is required</span>}
          <div className={formStyles.form__check}>
            <input
              type="checkbox"
              id="node"
              name="tools"
              value="node"
              {...register('node')}
            />

            <label htmlFor="node">Node Js</label>
            <input
              type="checkbox"
              id="react"
              name="tools"
              value="react"
              {...register('react')}
            />
            <label htmlFor="react"> React</label>
            <input
              type="checkbox"
              id="express"
              name="tools"
              value="express"
              {...register('express')}
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

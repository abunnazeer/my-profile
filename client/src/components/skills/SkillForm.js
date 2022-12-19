import { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import formStyles from '../../administration/form.module.css';
//import axios from 'axios';

function SkillFrom(props) {
  const {
    register,
    handleSubmit,
    // reset,
    //   formState,
    formState: { errors },
  } = useForm();

  const onSubmit = async data => {
    const formdata = {
      skill: data.skill,
      icon: data.icon,
    };

    await fetch('http://localhost:8000/skills', {
      method: 'POST',

      body: JSON.stringify(formdata),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(formdata);
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
          <input type="text" placeholder="Skills Name" {...register('skill')} />
          {errors.name && <span>This field is required</span>}
          <input type="url" placeholder="icon Url" {...register('icon')} />
          {errors.icon && <span>This field is required</span>}

          <div className={formStyles.form__submit}>
            <button type="submit">Add</button>
          </div>
        </form>
      </div>
    </Fragment>
  );
}

export default SkillFrom;

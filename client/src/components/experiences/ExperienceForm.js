import { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import formStyles from '../../administration/form.module.css';
//import axios from 'axios';

function ExperienceFrom(props) {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = async data => {
    // const formdata = {
    //   d: data.skill,
    //   icon: data.icon,
    // };

    await fetch('http://localhost:8000/experiences', {
      method: 'POST',

      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(data);
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
          <input type="text" placeholder="Duration" {...register('duration')} />
          {errors.duration && <span>This field is required</span>}
          <input
            type="text"
            placeholder="Job Position"
            {...register('jobTitle')}
          />
          {errors.jobTitle && <span>This field is required</span>}
          <input
            type="text"
            placeholder="The name of company"
            {...register('companyName')}
          />
          {errors.companyName && <span>This field is required</span>}

          <div className={formStyles.form__submit}>
            <button type="submit">Add</button>
          </div>
        </form>
      </div>
    </Fragment>
  );
}

export default ExperienceFrom;

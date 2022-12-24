import { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import formStyles from './../administration/form.module.css';
//import axios from 'axios';

function LoginFrom(props) {
  const {
    register,
    handleSubmit,
    // reset,
    //   formState,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    const formdata = {
      email: data.email,
      password: data.password,
    };
  };

  if (!props.showLogin) {
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
          <input type="email" placeholder="Email" {...register('email')} />
          {errors.name && <span>This field is required</span>}
          <input
            type="password"
            placeholder="Password"
            {...register('password')}
          />
          {errors.icon && <span>This field is required</span>}

          <div className={formStyles.form__submit}>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </Fragment>
  );
}

export default LoginFrom;

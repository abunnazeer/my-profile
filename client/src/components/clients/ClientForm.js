import { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import formStyles from '../../administration/form.module.css';
//import axios from 'axios';

function ClientFrom(props) {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = async data => {
    await fetch('http://localhost:8000/clients', {
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
          <input type="url" placeholder="Logo Url" {...register('logo')} />
          {errors.duration && <span>This field is required</span>}
          <input
            type="url"
            placeholder="Website Address"
            {...register('clientWebUrl')}
          />
          {errors.jobTitle && <span>This field is required</span>}
          <input
            type="text"
            placeholder="Client company Name"
            {...register('clientName')}
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

export default ClientFrom;

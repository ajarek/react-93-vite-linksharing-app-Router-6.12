import './FileUpload.css'
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';

const schema = yup.object().shape({
  files: yup.array().of(
    yup
      .mixed()
      .required('Choose a file')
      .test('fileSize', 'The file is too large', (value) => {
        if (!value) return false;
        return value.size <= 1048576; // Maximum file size in bytes (1MB)
      })
  ),
  email: yup.string().required(),
  first: yup.string().required(),
  last: yup.string().required(),
});

function FileUpload({onSubmit}) {
  const {register, handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

 

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
     <Controller
        name="file"
        control={control}
        defaultValue={null}
        render={({ field }) => (
          <div>
            <input
              type="file"
              onChange={(e) => field.onChange(e.target.files[0])}
            />
            {errors.file && <p>{errors.file.message}</p>}
          </div>
        )}
      />
      <div className='wrapper-input'>
        <label htmlFor='first'>First name</label>
        <input
          type='text'
          placeholder='Ben'
          {...register('first')}
        />
       {errors.first && <p>{errors.first.message}</p>}
      </div>
      <div className='wrapper-input'>
        <label htmlFor='last'>Last name</label>
        <input
          type='last'
          placeholder='Wright'
          {...register('last')}
        />
       {errors.last && <p>{errors.last.message}</p>}
      </div>
      <div className='wrapper-input'>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          placeholder='user@example.com'
          {...register('email')}
        />
       {errors.email && <p>{errors.email.message}</p>}
      </div>
      <button type="submit">Prześlij</button>
    </form>
  );
}

export default FileUpload;

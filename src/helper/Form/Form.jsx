import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import './Form.css'
import { useEffect } from 'react'
export const Form = ({ onSubmit }) => {
  const schema = yup.object().shape({
    platform: yup.string().required(),
    link: yup.string().required(),
  })

  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        //  platform: '',
        link: '',
      })
    }
  }, [formState, reset])

  return (
    <form
      className='form'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='wrapper-input'>
        <label htmlFor='email'>Platform</label>
        <select
          {...register('platform')}
          className='select'
        >
          <option value='GitHub'>GitHub</option>
          <option value='YouTube'>YouTube</option>
          <option value='LinkedIn'>LinkedIn</option>
          <option value='Facebook'>Facebook</option>
          <option value='Twitter'>Twitter</option>
          <option value='Instagram'>Instagram</option>
        </select>
        <p>{errors?.platform?.message}</p>
      </div>

      <div className='wrapper-input'>
        <label htmlFor='email'>Link</label>
        <input
          type='text'
          placeholder='https://github.com/'
          {...register('link')}
        />
        <p>{errors.link?.message}</p>
      </div>

      <div className='wrapper-input'>
        <input
          type='submit'
          value='+ Add new link'
        />
      </div>
    </form>
  )
}

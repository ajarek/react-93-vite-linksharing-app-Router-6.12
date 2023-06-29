import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import './Form.css'
import { useEffect } from 'react'
export const Form = ({ onSubmit }) => {
  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    phone: yup.string().required(),
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
        name: '',
        email: '',
        password: '',
        phone: '',
      })
    }
  }, [formState, reset])

  return (
    <form
      className='form'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='wrapper-input'>
        <label htmlFor='name'>Imię i Nazwisko</label>
        <input
          type='text'
          placeholder='Jan Kowalski'
          {...register('name')}
        />
        <p>{errors?.name?.message}</p>
      </div>

      <div className='wrapper-input'>
        <label htmlFor='email'>Email Adres</label>
        <input
          type='email'
          placeholder='kowalski@gmail.com'
          {...register('email')}
        />
        <p>{errors.email?.message}</p>
      </div>
      <div className='wrapper-input'>
        <label htmlFor='phone'>Hasło</label>
        <input
          type='password'
          {...register('password')}
        />
        <p>{errors.password?.message}</p>
      </div>
      <div className='wrapper-input'>
        <label htmlFor='phone'>Numer Telefonu</label>
        <input
          type='phone'
          placeholder='654 555 136'
          {...register('phone')}
        />
        <p>{errors.phone?.message}</p>
      </div>

      <div className='wrapper-input'>
        <input
          type='submit'
          value='Zarejestruj'
        />
      </div>
    </form>
  )
}

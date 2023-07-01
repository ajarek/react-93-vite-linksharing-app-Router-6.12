import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import './FormDelete.css'
import { useEffect } from 'react'
export const FormDelete = ({ onSubmit }) => {
  const schema = yup.object().shape({
    platform: yup.string().required(),
   
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
        // platform: '',
       
      })
    }
  }, [formState, reset])

  return (
    <form
      className='form-delete'
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
        <input
          type='submit'
          value='Delete link'
          
        />
      </div>
    </form>
  )
}

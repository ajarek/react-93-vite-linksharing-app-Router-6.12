import './Phone.css'

const Phone = ({ children, src, email, nameUser, background }) => {
  return (
    <div className='phone'>
      <div
        className='foto-user'
        style={{ backgroundColor: background }}
      >
        {src ? <img src={src} /> : null}
      </div>
      <div
        className='name-user'
        style={{ backgroundColor: background }}
      >
        {nameUser}
      </div>
      <div
        className='email-user'
        style={{ backgroundColor: background }}
      >
        {email}
      </div>
      {children}
    </div>
  )
}

export default Phone

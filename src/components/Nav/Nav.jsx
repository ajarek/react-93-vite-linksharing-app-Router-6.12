import { Link } from 'react-router-dom'
import { BsLink, BsLink45Deg, BsPersonCircle, BsEyeFill } from 'react-icons/bs'

import './Nav.css'

const Nav = () => {
  return (
    <>
      <nav className='nav'>
        <div className='logo'>
          <Link
            className='link'
            to={'/'}
          >
            <span>
              <BsLink
                size={30}
                color='white'
              />
            </span>
            <h1>devlinks</h1>
          </Link>
        </div>

        <ul className='wrapper'>
          <Link
            className='link'
            to={'/'}
          >
            <BsLink45Deg />
            <span>Links</span>
          </Link>
          <Link
            className='link'
            to={'/profile-details'}
          >
            <BsPersonCircle />
            <span>Profile Details</span>
          </Link>
        </ul>
        <div className='preview'>
          <Link
            className='link'
            to={'/preview'}
          >
            <BsEyeFill />
            <span>Preview</span>
          </Link>
        </div>
      </nav>
    </>
  )
}

export default Nav

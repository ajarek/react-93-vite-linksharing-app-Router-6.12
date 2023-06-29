import { Link } from 'react-router-dom'
import { BsLink, BsLink45Deg, BsPersonCircle } from 'react-icons/bs'

import './Nav.css'
import { React, useState, useContext } from 'react'
import { AppContext } from '../../App'

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
              <BsLink size={30} color='white' />
            </span>
            <h1>devlinks</h1>
          </Link>
        </div>

        <ul className='wrapper'>
          <Link className='link' to={'/'}>
         <BsLink45Deg/> Links
          </Link>
          <Link className='link' to={'/profile-details'}>
         <BsPersonCircle/> Profile Details
          </Link>
        </ul>
        <div className="preview">
        <Link className='link' to={'/preview'}>
          Preview
          </Link>
          </div>
      </nav>
    </>
  )
}

export default Nav

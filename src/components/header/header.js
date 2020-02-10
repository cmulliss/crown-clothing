import React from 'react'
import { Link } from 'react-router-dom'

import { auth } from '../../firebase/firebaseutils'

import { ReactComponent as Logo } from '../../assets/crown.svg'

import './header.styles.scss'

const Header = ({ currentUser }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
    </div>
  </div>
)

export default Header

// destructure current user property, and use a ternary operator to conditionally render either a div if true, ie if currentUser is an object, and a link if null.
// add functional callback to div, an anymous fn that calls auth.signOut

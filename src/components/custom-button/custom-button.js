import React from 'react'

import './custom-button.scss'

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button
    className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
)

export default CustomButton
// conditionally render with string interpolation, the classname of google-sign-in or render empty string, also, always render custom button.

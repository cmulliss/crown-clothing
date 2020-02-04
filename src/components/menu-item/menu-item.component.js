import React from 'react'
import './menu-item.syles.scss'

const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
      className={`${size}  menu-item`}
    >
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  )
}

export default MenuItem

// can destructure our title off the props
// same as props.title, except pulling that title value off of our props, then setting it the this title value inside our fn, so we can use it whenever we want

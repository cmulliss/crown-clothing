import React from 'react'
import './menu-item.styles.scss'

const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <div className={`${size}  menu-item`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  )
}

export default MenuItem

// can destructure our title off the props
// same as props.title, except pulling that title value off of our props, then setting it the this title value inside our fn, so we can use it whenever we want

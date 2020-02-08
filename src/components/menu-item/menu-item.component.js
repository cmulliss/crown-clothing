import React from 'react'
import { withRouter } from 'react-router-dom'

import './menu-item.styles.scss'

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`${size}  menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
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

export default withRouter(MenuItem)

// can destructure our title off the props
// same as props.title, except pulling that title value off of our props, then setting it the this title value inside our fn, so we can use it whenever we want
// withRouter is a HOC, essentially a fn that takes a component as an arg adn returns a modified component, this returns a MenuItem with access to the location, match and history props

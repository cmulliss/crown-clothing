import React, { Component } from 'react'
import MenuItem from '../menu-item/menu-item.component'
import './directory.styles.scss'

class Directory extends Component {
  constructor () {
    super()

    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          linkUrl: 'hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkUrl: ''
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: ''
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
          linkUrl: ''
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
          linkUrl: ''
        }
      ]
    }
  }

  render () {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    )
  }
}

export default Directory
// will have a state value of those menu items

// want to pass the section objects, above, into our menu item, so can create the menu items. we have to pass in a fn to our map call.
/// many ways to pass the props in, can destructure all the values off of section so instead of
// his.state.sections.map((section) => (
//   <MenuItem key={section.id} title={section.title} imageUrl={section.imageUrl}/>

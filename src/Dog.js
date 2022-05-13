import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Dog extends Component {
  render() {
      let {name,src} =this.props
    return (
      <div className='Dog'>  
        <Link to={`/dogs/${name}`}>
          <img src={src} alt={name} />
            {name}
         </Link>
      </div>
    )
  }
}

export default Dog
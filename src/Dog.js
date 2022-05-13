import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Dog.css'

class Dog extends Component {
  render() {
      let {name,src} =this.props
    return (
      <div className='Dog'>  
        <Link to={`/dogs/${name}`}>
          <img src={src} alt={name} />
           <h3> {name}</h3>
         </Link>
      </div>
    )
  }
}

export default Dog
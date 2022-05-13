import React from 'react'
import { NavLink } from 'react-router-dom'
import dogs from './data'

function Navbar() {   
  return (
    <div className='Navbar'>
        {dogs.map(dog=>(
            <NavLink to={`/dogs/${dog.name}`} key={dog.name}>{dog.name}</NavLink>
        ))}
    </div>
  )
}

export default Navbar
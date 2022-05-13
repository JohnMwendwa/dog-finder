import React from 'react'
import { NavLink } from 'react-router-dom'
import {getDogs} from './data'
import './Navbar.css'

function Navbar() {   
  let dogs = getDogs();
  return (
    <div className='Navbar'>
        {dogs.map(dog=>(
            <NavLink to={`/dogs/${dog.name}`} key={dog.name}>{dog.name}</NavLink>
        ))}
    </div>
  )
}

export default Navbar
import React from 'react'
import {useNavigate,useParams} from 'react-router-dom'
import {getDogs,searchDog} from './data'
import './DogDetails.css'

function DogDetails() {
  let params = useParams();
  let navigate =useNavigate();
  let dogs = getDogs();
  let dog = searchDog(dogs,params.name)
  return (
    <div className='DogDetails'>
      <img src={dog.src} alt={dog.name} />

      <div className="DogDetails-content">
      <h1>{dog.name}</h1>
      <h3>Age: {dog.age}</h3>
      <ul>
        {dog.facts.map((fact,idx)=>(
          <li key={idx}>{fact}</li>
        ))}
      </ul>

      <div className="DogDetails-btn">
      <button onClick={()=>navigate(-1)}>Go Back</button>
      <button onClick={()=>navigate('/')}>Home</button>
      </div>
      </div>
    </div>
  )
}

export default DogDetails
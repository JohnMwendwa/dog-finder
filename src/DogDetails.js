import React from 'react'
import {useNavigate,useParams} from 'react-router-dom'
import {getDogs,searchDog} from './data'

function DogDetails() {
  let params = useParams();
  let navigate =useNavigate();
  let dogs = getDogs();
  let dog = searchDog(dogs,params.name)
  return (
    <div className='DogDetails'>
      <img src={dog.src} alt={dog.name} />
      <h2>{dog.name}</h2>
      <h4>Age: {dog.age}</h4>
      <ul>
        {dog.facts.map((fact,idx)=>(
          <li key={idx}>{fact}</li>
        ))}
      </ul>
      <button onClick={()=>navigate(-1)}>Go Back</button>
    </div>
  )
}

export default DogDetails
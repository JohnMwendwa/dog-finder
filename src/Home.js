import React, { Component } from 'react'
import Dog from './Dog'

export class Home extends Component {
  render() {
     
    return (
      <div className='Home'>
         {this.props.dogs.map(dog=>(
             <Dog {...dog} key={dog.name}/>   
         ))}
      </div>
    )
  }
}

export default Home
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Dog from './Dog';
import Home from './Home';
import DogDetails from './DogDetails';
import {getDogs} from './data';


function App() {
  let dogs = getDogs();
  return (
    <div className="App">  
     <Navbar />

     <Routes>
       <Route index element={<Home dogs={dogs}/>} />
       <Route path='dogs' element={<Dog />} />
       <Route path="dogs/:name"  element={<DogDetails />} />
     </Routes>
    </div>
  );
}

export default App;
 
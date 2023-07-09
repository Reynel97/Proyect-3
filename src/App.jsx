import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import GetRamdonNumber from './utils/getRamdonNumber'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'

function App() {
  
  const [location , setLocation] = useState()

  useEffect(() => {
    axios
    .get(`https://rickandmortyapi.com/api/location/${GetRamdonNumber(126)}`)
    .then(res => setLocation(res.data))
    .catch(error => console.log(error))
  },[])

  

  return (
    
     <div>
      <h1>Rick And Morty App</h1>
      <LocationInfo
      location={location}
      />
      <div>
        {
          location?.residents.map(url => (
            <ResidentCard key={url} url={url}/>
          ))
        }
      </div>

     </div>

     
     
    
  )
}

export default App

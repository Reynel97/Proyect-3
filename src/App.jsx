import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import GetRamdonNumber from './utils/getRamdonNumber'

function App() {
  
  const [location , setLocation] = useState()

  useEffect(() => {
    axios
    .get(`https://rickandmortyapi.com/api/location/${GetRamdonNumber(126)}`)
    .then(res => setLocation(res.data))
    .catch(error => console.log(error))
  },[])

  console.log(location)

  return (
    <>
     <div>
      <h1>Rick And Morty App</h1>
     </div>
    </>
  )
}

export default App

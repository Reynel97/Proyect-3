import { useState, useEffect } from "react";
import axios from "axios";
import GetRandomNumber from "./utils/GetRandomNumber";
import LocationInfo from "./components/LocationInfo";
import ResidentCard from "./components/ResidentCard";
import Form from "./components/Form";
import "./App.css";

function App() {
  const [location, setLocation] = useState();
  const [idLocation, setIdLocation] = useState(GetRandomNumber(126));
  const [hasError, sethasError] = useState(false);
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/location/${idLocation}`;
    setIsloading(true);
    axios
      .get(url)
      .then((res) => {
        setLocation(res.data);
        sethasError(false);
      })
      .catch((error) => {
        console.log(error);
        sethasError(true);
      })
      .finally(() => {
        setIsloading(false);
      });
  }, [idLocation]);

  return (
    <div className="main_container">
      
      <div className="resident__back">
      </div>
      
      <h1 className="resident__title">Rick And Morty App</h1>
      <Form setIdLocation={setIdLocation} />
      {isloading ? (
        <h2 className="resident__loa">Loading...</h2>
      ) : hasError ? (
        <h1 className="resident__hey">❌ Hey! you mus provide an id from 1 to 126 😢</h1>
      ) : (
        <>
          <LocationInfo location={location} />
          <div className="resident__container">
            {location?.residents.map((url) => (
              <ResidentCard key={url} url={url} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;

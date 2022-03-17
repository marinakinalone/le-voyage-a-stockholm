import './App.css';
import { Header, Map, Details, ButtonSet } from './components/index';
// import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { useEffect, useState } from 'react';

const App = () => {
  const [loading, setLoading] = useState(true)
  const [locationTypes, setLocationTypes] = useState([]);
  const [locationData, setLocationData] = useState([]);


  const fetchLocationData = async () => {
    const locationInfoData = await fetch("/locations")
    const locations = await locationInfoData.json();
    setLocationData([...locations.locations])
    const typesData = await fetch("/types")
    const types = await typesData.json();
    setLocationTypes([...types.types])
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }

  useEffect(() => {
    // fetch("/types")
    //   .then(res => res.json())
    //   .then(data => setLocationTypes([...data.types]))
     
  
     fetchLocationData("/locations");
  }, [])

  return (
    <div className="page">
      {loading ? (
        <p>loading...</p>
      ) : (
        <>
        <Header />
        <Map />
        <section className="info-buttons">
          <Details />
          <ButtonSet />
        </section>
        <p>{locationData[0].name}</p>
        <p>{locationTypes[0].type}</p>
        </>
      )}
    </div>
  )
}

export default App;

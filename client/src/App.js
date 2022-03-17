import './App.css';
import { Header, Map, Details, ButtonSet } from './components/index';
// import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { useEffect, useState } from 'react';

const App = () => {
  const [loading, setLoading] = useState(true)
  const [locationTypes, setLocationTypes] = useState([]);
  const [locationData, setLocationData] = useState([]);

  useEffect(() => {
    const fetchLocationData = async () => {
      const fetchedLocations = await fetch("/locations")
      const locationsResult = await fetchedLocations.json();
      setLocationData([...locationsResult.locations])
      const fetchedTypes = await fetch("/types")
      const typesResult = await fetchedTypes.json();
      setLocationTypes([...typesResult.types])
      setTimeout(() => {
        setLoading(false)
      }, 1000)
     }
     fetchLocationData();
  }, [loading])
  return (
    <div className="page">
      {loading ? (
        <p>loading...</p>
      ) : (
        <>
        <Header />
        <Map locations={locationData} types={locationTypes} />
        <section className="info-buttons">
          <Details typesInfo={locationTypes} />
          <ButtonSet typesInfo={locationTypes} />
        </section>
        </>
      )}
    </div>
  )
}

export default App;

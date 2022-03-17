import './App.css';
import { Header, Map, Details, ButtonSet } from './components/index';
// import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { useEffect, useState } from 'react';

const App = () => {
  const [loading, setLoading] = useState(true)
  const [locationTypes, setLocationTypes] = useState([]);
  const [locationData, setLocationData] = useState([]);
  const [displayLocation, setDisplayLocation] = useState([])
  const [displayType, setDisplayType] = useState([])

  useEffect(() => {
    const fetchLocationData = async () => {
      const fetchedLocations = await fetch("/locations")
      const locationsResult = await fetchedLocations.json();
      setLocationData([...locationsResult.locations])
      setDisplayLocation([...locationsResult.locations])
      const fetchedTypes = await fetch("/types")
      const typesResult = await fetchedTypes.json();
      setLocationTypes([...typesResult.types])
      setDisplayType([...typesResult.types])
      setTimeout(() => {
        setLoading(false)
      }, 1000)
     }
     fetchLocationData();
  }, [loading])

  const getLocationsByType = selectedType => {
    if (selectedType === "SHOW ALL") {
      setDisplayLocation([...locationData])
      return;
    }
    const updatedLocations = locationData.filter(location => location.type === selectedType);
    setDisplayLocation([...updatedLocations]);
}

  return (
    <div className="page">
      {loading ? (
        <p>chargement...</p>
      ) : (
        <>
        <Header />
        <Map locations={displayLocation} />
        <section className="info-buttons">
          <Details typesInfo={displayType} />
          <ButtonSet typesInfo={displayType} getLocationsByType={getLocationsByType} />
        </section>
        </>
      )}
    </div>
  )
}

export default App;

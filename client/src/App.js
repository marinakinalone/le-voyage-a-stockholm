import './App.css';
import { Header, Map, Details, ButtonSet } from './components/index';
import { useEffect, useState } from 'react';

const App = () => {
  const [loading, setLoading] = useState(true)
  const [locationTypes, setLocationTypes] = useState([]);
  const [locationData, setLocationData] = useState([]);
  const [displayLocation, setDisplayLocation] = useState([])
  const [displayType, setDisplayType] = useState([
    {
      "description" : "Le Voyage à Stockholm est un petit guide de présentant mes endroits favoris. Et oui, le titre est un clin d'oeil au Voyage à Nantes :)",
    }
])

  useEffect(() => {
    const fetchLocationData = async () => {
      const fetchedLocations = await fetch("/locations")
      const locationsResult = await fetchedLocations.json();
      setLocationData([...locationsResult.locations])
      setDisplayLocation([...locationsResult.locations])
      const fetchedTypes = await fetch("/types")
      const typesResult = await fetchedTypes.json();
      setLocationTypes([...typesResult.types])
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

const getDescriptionByType = selectedType => {
  const updatedDescription = locationTypes.filter(description => description.type === selectedType);
  setDisplayType([...updatedDescription]);
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
          <ButtonSet typesInfo={locationTypes} getLocationsByType={getLocationsByType} getDescriptionByType={getDescriptionByType} />
        </section>
        </>
      )}
    </div>
  )
}

export default App;

import './App.css';
import { Header, Map, Details, ButtonSet } from './components/index';
import { useEffect, useState } from 'react';

const App = () => {
  const [loading, setLoading] = useState(true)
  const [locations, setLocations] = useState([]);
  const [categories, setCategories] = useState([]);
  const [displayLocation, setDisplayLocation] = useState([])
  const [displayCategory, setDisplayCategory] = useState([
    {
      "description" : "Le Voyage à Stockholm est un petit guide présentant mes endroits favoris. Et oui, le titre est un clin d'oeil au Voyage à Nantes :)",
    }
])

  useEffect(() => {
    const fetchLocationsAndCategories = async () => {
      console.log("waiting...")
      const locationsData = await fetch("http://localhost:3001/locations")
      const locationsResult = await locationsData.json();
      setLocations([...locationsResult])
      setDisplayLocation([...locations])
      const categoriesData = await fetch("http://localhost:3001/categories")
      const categoriesResult = await categoriesData.json();
      setCategories([...categoriesResult])
      setTimeout(() => {
        setLoading(false)
      }, 1000)
     }
     fetchLocationsAndCategories();
  }, [loading])

const getLocationsByType = selectedType => {
   if (selectedType === "SHOW ALL") {
    setDisplayLocation([...locations])
    return;
   }
  const updatedLocations = locations.filter(location => location.category === selectedType);
   setDisplayLocation([...updatedLocations]);
}

const getDescriptionByType = selectedType => {
  const updatedDescription = categories.filter(description => description.category === selectedType);
  setDisplayCategory([...updatedDescription]);
}

const getDescriptionByMarker = selectedMarkerKey => {
  const updatedDescription = displayLocation.filter(location => location._id === selectedMarkerKey)
  setDisplayCategory([...updatedDescription]);
}


  return (
    <div className="page">
      {loading ? (
        <p>chargement...</p>
      ) : (
        <>
        <Header />
        <Map locations={displayLocation} categories={categories} getDescriptionByMarker={getDescriptionByMarker} />
        <section className="info-buttons">
          <Details content={displayCategory} />
          <ButtonSet categories={categories} getLocationsByType={getLocationsByType} getDescriptionByType={getDescriptionByType} />
        </section>
        </>
      )}
    </div>
  )
}

export default App;

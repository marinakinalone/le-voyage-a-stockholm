import './css/main.css';
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
  const [selectedMarker, setSelectedMarker] = useState(false);


  useEffect(() => {
    const fetchLocationsAndCategories = async () => {
      const locationsData = await fetch("https://le-vas-server.herokuapp.com/locations/all")
      const locationsResult = await locationsData.json();
      setLocations([...locationsResult])
      setDisplayLocation([...locations])
      const categoriesData = await fetch("https://le-vas-server.herokuapp.com/categories/all")
      const categoriesResult = await categoriesData.json();
      setCategories([...categoriesResult])
      setTimeout(() => {
        setLoading(false)
      }, 1000)
     }
     fetchLocationsAndCategories();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading])

const getLocationsByType = selectedType => {
   if (selectedType === "TOUT VOIR") {
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

const setActiveMarker = (id) => {
  setSelectedMarker(id)
}

  return (
    <div className="page">
      {loading ? (
        <p>chargement...</p>
      ) : (
        <>
        <Header />
        <Map locations={displayLocation} categories={categories} activeMarker={selectedMarker} getDescriptionByMarker={getDescriptionByMarker} setActiveMarker={setActiveMarker} />
        <section className="info-buttons">
          <Details content={displayCategory} />
          <ButtonSet categories={categories} getLocationsByType={getLocationsByType} getDescriptionByType={getDescriptionByType} setActiveMarker={setActiveMarker} />
        </section>
        </>
      )}
    </div>
  )
}

export default App;


import Location from './Location';
import { useState, useEffect } from 'react';


const Markers = ({ locations, categories, getDescriptionByMarker }) => {
    const [selectedMarker, setSelectedMarker] = useState(false);

    const getColor = (categoriesList, locationCategory, state) => {
        const index = categoriesList.findIndex(item => item.category === locationCategory)
        return categoriesList[index].colors[state];
    }
  
    const handleClick = (id) =>{
        getDescriptionByMarker(id)
        setSelectedMarker(id);
    }

    
    return (
        <>
        {locations.map(location => {
            if (location._id === selectedMarker) {
                return <Location key={location._id} color={getColor(categories, location.category, "selected")} scale={2} zIndex={100} location={location} getDescriptionByMarker={getDescriptionByMarker} handleClick={handleClick} /> 
            } else {
                return <Location key={location._id} color={getColor(categories, location.category, "default")} scale={1.5} zIndex={1} location={location} getDescriptionByMarker={getDescriptionByMarker} handleClick={handleClick} /> 
            }

        })}
        </>

    )
}

export default Markers;

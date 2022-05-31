
import Location from './Location';
import { useState } from 'react';


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
                return <Location color={getColor(categories, location.category, "selected")} location={location} getDescriptionByMarker={getDescriptionByMarker} handleClick={handleClick} /> 
            } else {
                return <Location color={getColor(categories, location.category, "default")} location={location} getDescriptionByMarker={getDescriptionByMarker} handleClick={handleClick} /> 
            }

        })}
        </>

    )
}

export default Markers;

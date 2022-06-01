
import Location from './Location';

const Markers = ({ locations, categories, activeMarker, getDescriptionByMarker, setActiveMarker }) => {

    const getColor = (categoriesList, locationCategory, state) => {
        const index = categoriesList.findIndex(item => item.category === locationCategory)
        return categoriesList[index].colors[state];
    }

    const handleClick = (id) =>{
        getDescriptionByMarker(id)
        setActiveMarker(id);
    }

    
    return (
        <>
        {locations.map(location => {
            if (location._id === activeMarker) {
                return <Location key={location._id} color={getColor(categories, location.category, "selected")} scale={2} zIndex={100} location={location} getDescriptionByMarker={getDescriptionByMarker} handleClick={handleClick} clicked={true} /> 
            } else {
                return <Location key={location._id} color={getColor(categories, location.category, "default")} scale={1.5} zIndex={1} location={location} getDescriptionByMarker={getDescriptionByMarker} handleClick={handleClick} clicked={false} /> 
            }

        })}
        </>

    )
}

export default Markers;

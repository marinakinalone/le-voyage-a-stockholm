
import Location from './Location';

const Markers = ({ locations, categories, getDescriptionByMarker }) => {

    const getColor = (categoriesList, locationCategory, state) => {
        const index = categoriesList.findIndex(item => item.category === locationCategory)
        return categoriesList[index].colors[state];
    }
    

    return (
        <>
        {locations.map(location => {
            return <Location color={getColor(categories, location.category, "default")}location={location} getDescriptionByMarker={getDescriptionByMarker}
        />

        })}
        </>

    )
}

export default Markers;

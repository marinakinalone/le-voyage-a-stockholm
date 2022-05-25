import { Marker} from '@react-google-maps/api';
import { markerIcon } from './helpers';

const Markers = ({ locations, categories, getDescriptionByMarker }) => {
    const handleClick = (id, location) =>{
        getDescriptionByMarker(id)
    }

    const getColor = (categoriesList, locationCategory, state) => {
        const index = categoriesList.findIndex(item => item.category === locationCategory)
        return categoriesList[index].colors[state];
    }

    return (
        <>
        {locations.map(location => {
            return <Marker
            key={location._id}
            position={location.position}
            icon={markerIcon(getColor(categories, location.category, "default"))}
            clickable={true}
            onClick={() => handleClick(location._id, location)}
        />
        })}
        </>

    )
}

export default Markers;

import { Marker} from '@react-google-maps/api';
import { markerIcon } from './helpers';

const Markers = ({ locations, categories, getDescriptionByMarker }) => {
    const handleClick = (id) =>{
        getDescriptionByMarker(id)
    }

    const getColor = (categoriesList, locationCategory) => {
        const index = categoriesList.findIndex(item => item.category === locationCategory)
        return categoriesList[index].colors.default;
    }

    return (
        <>
        {locations.map(location => {
            return <Marker
            key={location._id}
            position={location.position}
            icon={markerIcon(getColor(categories, location.category))}
            clickable={true}
            onClick={() => handleClick(location._id)}
        />
        })}
        </>

    )
}

export default Markers;

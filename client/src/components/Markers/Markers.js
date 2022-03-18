import { Marker} from '@react-google-maps/api';
import { markerIcon } from './helpers';



const Markers = ({ locations, getDescriptionByMarker }) => {
    const handleClick = (id) =>{
        getDescriptionByMarker(id)
    }
    return (
        <>
        {locations.map(location => {
            return <Marker
            key={location.place_id}
            position={location.position}
            icon={markerIcon(location.colors.default)}
            onClick={() => handleClick(location.place_id)}
        />
        })}
        </>

    )
}

export default Markers;

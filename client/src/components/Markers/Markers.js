import { Marker} from '@react-google-maps/api';
import { markerIcon } from './helpers';

const Markers = ({ locations, getDescriptionByMarker }) => {
    console.log(locations)
    const handleClick = (id) =>{
        getDescriptionByMarker(id)
    }
    return (
        <>
        {locations.map(location => {
            return <Marker
            key={location._id}
            position={location.position}
            icon={markerIcon("red")}
            onClick={() => handleClick(location._id)}
        />
        })}
        </>

    )
}

export default Markers;

import { Marker} from '@react-google-maps/api';
import { markerIcon } from './helpers';



const Markers = ({ locations }) => {
    return (
        <>
        {locations.map(location => {
            return <Marker
            key={location.place_id}
            position={location.position}
            icon={markerIcon(location.colors.default)} 
        />
        })}
        </>

    )
}

export default Markers;

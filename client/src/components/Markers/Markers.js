import { Marker} from '@react-google-maps/api';
import { markerIcon } from './helpers';

const Markers = ({ locations, types }) => {
    return (
        <>
        {locations.map(location => {
            return <Marker
            position={location.position}
            icon={markerIcon("blue")} 
        />
        })}
        </>

    )
}

export default Markers;

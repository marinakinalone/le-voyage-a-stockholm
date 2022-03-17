import { Marker} from '@react-google-maps/api';
import { markerIcon } from './helpers';

const Markers = () => {
    return (
         <Marker
            position={{
                lat: 59.29212410918028,
                lng: 18.081913891108552
            }}
            icon={markerIcon("blue")} 
        />
    )
}

export default Markers;

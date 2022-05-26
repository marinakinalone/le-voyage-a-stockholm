import { Marker} from '@react-google-maps/api';
import { markerIcon } from './helpers';

const Location = ({location, color, getDescriptionByMarker}) => {
    const handleClick = (id, location) =>{
        getDescriptionByMarker(id)
    }
  return (
    <>
        <Marker
            key={location._id}
            position={location.position}
            icon={markerIcon(color)}
            clickable={true}
            onClick={() => handleClick(location._id, location)}
        />
    </>
  )
}

export default Location
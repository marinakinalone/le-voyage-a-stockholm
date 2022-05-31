import { Marker} from '@react-google-maps/api';
import { markerIcon } from './helpers';

const Location = ({location, color, scale, zIndex, handleClick}) => {
  
  return (
    <>
        <Marker
            key={location._id}
            position={location.position}
            icon={markerIcon(color, scale)}
            zIndex={zIndex}
            clickable={true}
            onClick={() => handleClick(location._id)}
        />
    </>
  )
}

export default Location
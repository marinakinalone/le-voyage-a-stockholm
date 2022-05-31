import { Marker} from '@react-google-maps/api';
import { markerIcon } from './helpers';

const Location = ({location, color, handleClick}) => {
  
  return (
    <>
        <Marker
            key={location._id}
            position={location.position}
            icon={markerIcon(color)}
            clickable={true}
            onClick={() => handleClick(location._id)}
        />
    </>
  )
}

export default Location
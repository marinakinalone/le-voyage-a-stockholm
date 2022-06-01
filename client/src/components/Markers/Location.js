import { Marker, InfoWindow } from '@react-google-maps/api';
import { markerIcon } from './helpers';

const Location = ({location, color, scale, zIndex, handleClick, clicked}) => {
  return (
    <>
      <Marker
          key={location._id}
          position={location.position}
          icon={markerIcon(color, scale)}
          zIndex={zIndex}
          clickable={true}
          onClick={() => handleClick(location._id)}
      >
      {clicked ? (
            <InfoWindow
            >
              <div className="infobox" >
                <p style={{backgroundColor: color}} className="infobox-label">{location.category}</p>
                <h3 >{location.name}</h3>
                <p>{location.address}</p>
                <a href={location.directions}>itinéraire</a>
              </div>
            </InfoWindow>
      ):(
        <></>
      )}
      </Marker>
    </>
  )
}

export default Location
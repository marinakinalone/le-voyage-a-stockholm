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
              <article>
                <p>catégorie : <span>{location.category}</span></p>
                <h3>{location.name}</h3>
                <p>{location.address}</p>
                <a href={location.directions}>itinéraire</a>
              </article>
            </InfoWindow>
      ):(
        <></>
      )}
      </Marker>
    </>
  )
}

export default Location
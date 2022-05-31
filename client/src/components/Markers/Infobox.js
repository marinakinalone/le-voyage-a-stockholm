import { InfoWindow } from '@react-google-maps/api';

const Infobox = ({location}) => {
console.log(location.position.lng)
console.log(location.position.lng + 0.0000000000003)
  return (
    <InfoWindow
  >
    <article>
      <p>catégorie : <span>{location.category}</span></p>
      <h3>{location.name}</h3>
      <p>{location.address}</p>
      <a href={location.directions}>itinéraire</a>
    </article>
  </InfoWindow>
  )
}

export default Infobox
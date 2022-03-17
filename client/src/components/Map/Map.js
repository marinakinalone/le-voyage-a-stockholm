import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { apiKey, containerStyle, center } from './helpers';
import { Markers } from '../index';

const Map = () => {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: `${apiKey}`
      })

    // const [map, setMap] = React.useState(null)
  
    // const onLoad = React.useCallback(function callback(map) {
    //   const bounds = new window.google.maps.LatLngBounds();
    //   map.fitBounds(bounds);
    //   setMap(map)
    // }, [])
  
    // const onUnmount = React.useCallback(function callback(map) {
    //   setMap(null)
    // }, [])
    return isLoaded ? (
      <section className="map">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={11} 
        // onLoad={onLoad}
        // onUnmount={onUnmount}
      >
        <>
        <Markers />
        </> 
      </GoogleMap>
      </section>
    ) :
    <>
      <p>currently loading...or maybe broken!</p>
    </>
  }

  export default Map;
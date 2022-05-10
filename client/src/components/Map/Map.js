import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { apiKey, containerStyle, center } from './helpers';
import { Markers } from '../index';

const Map = ({ locations, categories, getDescriptionByMarker }) => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: `${apiKey}`
      })

    return isLoaded ? (
      <section className="map">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={11} 
        options={{
          disableDefaultUI: true
        }}
      >
        <>
          <Markers locations={locations} categories={categories} getDescriptionByMarker={getDescriptionByMarker} />
        </> 
      </GoogleMap>
      </section>
    ) :
    <>
      <p>currently loading...or maybe broken!</p>
    </>
  }

  export default Map;
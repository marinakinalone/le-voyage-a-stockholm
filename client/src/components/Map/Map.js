import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { apiKey, containerStyle, center } from './helpers';
import { Markers } from '../index';

const Map = ({ locations, categories, activeMarker, getDescriptionByMarker, setActiveMarker }) => {
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
          <Markers locations={locations} categories={categories} activeMarker={activeMarker} getDescriptionByMarker={getDescriptionByMarker} setActiveMarker={setActiveMarker} />
        </> 
      </GoogleMap>
      </section>
    ) :
    <>
      <p>currently loading...</p>
    </>
  }

  export default Map;
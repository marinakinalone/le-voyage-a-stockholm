import './App.css';
// import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import React from 'react';

const apiKey = process.env.REACT_APP_ACCESS_KEY

const containerStyle = {
  width: '100%',
  height: '100vh'
};

const center = {
  lat: 59.3332646245356,
  lng: 18.06970432614886
};

const App = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: `${apiKey}`
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={12}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      { /* Child components, such as markers, info windows, etc. */ }
      <></>
    </GoogleMap>
  ) : <>
  <p>not loaded</p>
  </>
}

export default App;

import './App.css';
import { Header, Map } from './components/index';
// import { Wrapper, Status } from "@googlemaps/react-wrapper";
import React from 'react';

const App = () => {
  return (
    <div className="page">
      <Header />
      <Map />
    </div>
  )
}

export default App;

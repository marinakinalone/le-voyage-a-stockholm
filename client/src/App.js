import './App.css';
import { Header, Map } from './components/index';
// import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { useEffect, useState } from 'react';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/types")
      .then(res => res.json())
      .then(data => setData(data.types[0].type))
  })

  return (
    <div className="page">
      <Header />
      <Map />
      <p>{data}</p>
    </div>
  )
}

export default App;

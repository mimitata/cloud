import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';



const MapContainer = () => {
  const item = {
    name: "gomycodeNG",
    location: {
      lat: 6.4953147,
      lng: 3.3789879,
    }
  }

  const mapStyles = {
    height: "400px",
    width: "100%"
  }
  
  const defaultCenter = {
    lat: 6.4953147,
    lng: 3.3789879,
  }

  return(
    <div>
      <LoadScript googleMapsApiKey='AIzaSyC-9HBtGH2Tn5omz6Y4g9B29Jg5EVVx2xE'>
        <GoogleMap mapContainerStyle={mapStyles} zoom={15} center={defaultCenter}>
          <Marker key={item.name} position={item.location}/>

        </GoogleMap>
      
      </LoadScript>
    </div>

  )
}





export default MapContainer;
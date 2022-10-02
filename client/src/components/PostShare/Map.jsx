import React from 'react'
import { useState, useRef, useEffect } from 'react'

const Map = ({ center, zoom}) => {
  //Map component setup
  const mapref = useRef();
  const [map, setMap] = useState();

  useEffect(() => {
    if (mapref.current && !map) {
        setMap(new window.google.maps.Map(mapref.current, {
          center,
          zoom,
      }));
    }
  }, [mapref, map])

  return (
      <div ref={mapref} id="map"/>
  )
}

export default Map
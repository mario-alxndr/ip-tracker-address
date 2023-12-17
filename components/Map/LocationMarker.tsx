import React, { useState } from "react";
import { LatLngExpression } from "leaflet";
import { Popup, useMapEvents } from "react-leaflet";
import { Marker } from "react-leaflet";

const LocationMarker = () => {
  const [position, setPosition] = useState<LatLngExpression>({
    lat: 0,
    lng: 0,
  });

  return (
    <Marker position={position!}>
      <Popup>You are here</Popup>
    </Marker>
  )
}

export default LocationMarker;
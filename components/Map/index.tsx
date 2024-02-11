// src/components/Map.tsx
import React, { useContext } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

// Component
import LocationMarker from "./LocationMarker";

import { PositionContext } from './../../app/page';

const MyMap = () => {
  const position = useContext(PositionContext);
  const { lat = -6.2, lng = 106.8 } = position;

  console.log('position', position);

  return (
    <MapContainer 
      className={'h-screen z-0'}
      center={{
        lat: lat,
        lng: lng
      }}
      zoom={13}
      zoomControl={false}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />
    </MapContainer>
  );
};

export default MyMap;

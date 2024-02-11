// src/components/Map.tsx
import React, { useContext, useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

// Component
import LocationMarker from "./LocationMarker";

import { PositionContext } from './../../app/page';

const MyMap = () => {
  const position = useContext(PositionContext);
  const { lat: fetchedLat, lng: fetchedLng } = position;

  const [lat, setLat] = useState(-6.2);
  const [lng, setLng] = useState(106.8);

  useEffect(() => {
    setLat(fetchedLat); 
    setLng(fetchedLng);
  }, []);

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

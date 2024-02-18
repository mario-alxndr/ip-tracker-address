// src/components/Map.tsx
import React, { useContext, useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

// Component
import LocationMarker from "./LocationMarker";

// Lib
import { PositionContext } from '@/lib/context';

const MyMap = () => {
  const position = useContext(PositionContext);
  const { lat: propsLat, lng: propsLng } = position;

  const RecenterAutomatically = ({ lat, lng }: any) => {
    const map = useMap();

    useEffect(() => {
      map.setView([lat, lng]);
    }, []);
    return null;
  };

  return (
    <MapContainer
      attributionControl
      className={'h-screen z-0'}
      center={{
        lat: propsLat,
        lng: propsLng
      }}
      dragging
      zoom={13}
      zoomControl={false}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />
      <RecenterAutomatically lat={propsLat} lng={propsLng} />
    </MapContainer>
  );
};

export default MyMap;

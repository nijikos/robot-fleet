import { mapboxToken } from "@/@data/mapData";
import React, { useEffect } from "react";
import Map, { useMap } from "react-map-gl";
import MapChild from "./MapChild";

export default function MapView() {
  return (
    <Map
      mapboxAccessToken={mapboxToken}
      initialViewState={{
        longitude: 103.7802,
        latitude: 1.30035,
        zoom: 18.3,
      }}
      style={{ width: 1629, height: 1245 }}
      mapStyle='mapbox://styles/mapbox/streets-v9'
      onLoad={(data) => {
        console.log({ onloadData: data });
      }}
    >
      <MapChild />
    </Map>
  );
}

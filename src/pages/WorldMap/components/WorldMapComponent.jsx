import React, { useState } from "react";
import "../CSS/index.css";
import Article from "./Article";
import Markers from "../json/markers.json";
import {
  MapContainer,
  TileLayer,
  useMapEvents,
  Marker,
  Popup,
  Tooltip,
  CircleMarker,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import CountryLayout from "./CountryLayout";

const defaultPosition = [0, 0];

const invisibleIcon = new L.Icon({
  iconUrl: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",
  iconSize: [0, 0],
  iconAnchor: [0, 0],
  popupAnchor: [0, 0],
  shadowUrl: null,
  shadowSize: [0, 0],
  shadowAnchor: [0, 0],
});

function LocationTracker({ setCenter }) {
  useMapEvents({
    moveend: (event) => {
      const map = event.target;
      const center = map.getCenter();
      // console.log(center);
      setCenter([center.lat, center.lng]);
    },
  });
  return null;
}

function WorldMapComponent() {
  const [center, setCenter] = useState(defaultPosition);
  const limitedBounds = [
    [-180, -360],
    [180, 360],
  ];

  return (
    <div className="w-full h-full p-auto flex justify-center items-center bg-blue-50 z-0">
      <MapContainer
        center={center}
        zoom={2}
        minZoom={1.5}
        scrollWheelZoom={true}
        className="w-[80%] h-[80%] rounded-xl shadow z-0"
        maxBounds={limitedBounds} // hoặc customBounds
        maxBoundsViscosity={1}
      >
        {/* <CountryLayout /> */}
        <LocationTracker setCenter={setCenter} />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {Markers.map((marker, index) => {
          const positions = [
            [marker.lat, marker.lon],
            [marker.lat, marker.lon - 360],
            [marker.lat, marker.lon + 360],
          ];

          return positions.map((pos, i) => (
            <CircleMarker
              key={`${index}-${i}`}
              center={pos}
              pathOptions={{
                color: "none",
                fillColor: "#A31D1D",
                fillOpacity: 0.7,
                hover: "none",
                focus: "none",
              }}
              radius={12}
            >
              <Popup>
                <div className="text-lg font-bold text-white p-1 px-3 bg-blue-500 mb-1">
                  {marker.place_name}
                </div>
                <Article marker={marker} />
              </Popup>
            </CircleMarker>
          ));
        })}
        ;
        {/* <Marker position={center} interactive={false} icon={invisibleIcon}>
          <Tooltip permanent direction="top" className="tooltip"></Tooltip>
        </Marker> */}
      </MapContainer>
    </div>
  );
}

export default WorldMapComponent;

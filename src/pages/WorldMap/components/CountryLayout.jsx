import React, { useMemo, useCallback, useRef } from "react";
import { GeoJSON, useMap } from "react-leaflet";
import { debounce } from "lodash";
import countries from "../json/countriesgeojson.json";

function CountryLayout() {
  const map = useMap();
  const selectedLayerRef = useRef(null);

  const onEachCountry = useCallback(
    (feature, layer) => {
      const name = feature.properties.ADMIN || feature.properties.name;

      layer.on({
        click: () => {
          if (selectedLayerRef.current) {
            selectedLayerRef.current.setStyle({
              fillColor: "transparent",
            });
          }
          const bounds = layer.getBounds();
          map.flyTo(map.getCenter(), 2, {
            duration: 0.3,
          });
          map.fitBounds(bounds);
          layer.bindPopup(`${name}`).openPopup();
          // layer.setStyle({
          //   fillColor: "orange",
          // });
          selectedLayerRef.current = layer;
          console.log(layer);
        },
      });
    },
    [map]
  );

  const cloneFeatures = (features, offsetLng) =>
    features.map((f) => {
      const cloned = {
        type: f.type,
        properties: { ...f.properties },
        geometry: {
          type: f.geometry.type,
          coordinates: JSON.parse(JSON.stringify(f.geometry.coordinates)),
        },
      };
      if (cloned.geometry.type === "Polygon") {
        cloned.geometry.coordinates = cloned.geometry.coordinates.map((poly) =>
          poly.map(([lng, lat]) => [lng + offsetLng, lat])
        );
      } else if (cloned.geometry.type === "MultiPolygon") {
        cloned.geometry.coordinates = cloned.geometry.coordinates.map((group) =>
          group.map((poly) => poly.map(([lng, lat]) => [lng + offsetLng, lat]))
        );
      }
      return cloned;
    });

  const wrappedData = useMemo(() => {
    const wrappedFeatures = [
      ...countries.features,
      ...cloneFeatures(countries.features, 360),
      ...cloneFeatures(countries.features, -360),
    ];
    return {
      type: "FeatureCollection",
      features: wrappedFeatures,
    };
  }, []);

  const getStyle = (feature) => ({
    color: "white",
    weight: 1,
    fillColor:
      selectedLayerRef.current && selectedLayerRef.current.feature === feature
        ? "orange"
        : "transparent",
    fillOpacity: 0.5,
  });
  return (
    <GeoJSON
      data={wrappedData}
      style={getStyle}
      onEachFeature={onEachCountry}
    />
  );
}

export default CountryLayout;

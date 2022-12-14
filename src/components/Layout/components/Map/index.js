import React from "react";
import maplibreGl from "maplibre-gl";
import classNames from "classnames/bind";
import styles from "./Map.module.scss";
import { Map, Marker } from "react-map-gl";
import "maplibre-gl/dist/maplibre-gl.css";

const cx = classNames.bind(styles);

function MapLibre() {
  const lng = 108.1572348419274;
  const lat = 16.067629934763744;
  const zoom = 13;

  return (
    <div className={cx("map-wrap")}>
      <Map
        mapLib={maplibreGl}
        initialViewState={{
          longitude: lng,
          latitude: lat,
          zoom: zoom,
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle="https://api.maptiler.com/maps/streets/style.json?key=jCgKzqnyf5RobipHaRTj">
        <Marker longitude={lng} latitude={lat} color="red" />
        <Marker longitude={108.1673} latitude={16.0677} color="blue" />
      </Map>
    </div>
  );
}

export default MapLibre;

// `https://api.maptiler.com/maps/streets/style.json?key=${API_KEY}`,

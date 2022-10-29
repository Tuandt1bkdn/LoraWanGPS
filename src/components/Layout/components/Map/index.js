import React, { useRef, useEffect, useState } from "react";
import maplibreGl from "maplibre-gl";
import classNames from "classnames/bind";
import styles from "./Map.module.scss";

const cx = classNames.bind(styles);

function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng] = useState(108.20623);
  const [lat] = useState(16.047079);
  const [zoom] = useState(14);
  const [API_KEY] = useState("jCgKzqnyf5RobipHaRTj");
  useEffect(() => {
    if (map.current) return;
    map.current = new maplibreGl.Map({
      container: mapContainer.current,
      // eslint-disable-next-line no-template-curly-in-string
      style: `https://api.maptiler.com/maps/streets/style.json?key=${API_KEY}`,
      center: [lng, lat],
      zoom: zoom,
    });
  });
  return (
    <div className={cx("map-wrap")}>
      <div ref={mapContainer} className={cx("map")} />
    </div>
  );
}

export default Map;

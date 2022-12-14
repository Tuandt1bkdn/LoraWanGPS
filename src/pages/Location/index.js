import React, { useState, useEffect, useContext, useRef } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoltLightning,
  faGaugeHigh,
  faTemperatureLow,
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import styles from "./Location.module.scss";
import { DriverManage, getDataNow } from "src/api/services/getDataAPI";
import InforOnMap from "src/components/Layout/components/InforOnMap";
import { UserContext } from "src/components/Layout/DefaultLayout";
import tt from "@tomtom-international/web-sdk-maps";
import { services } from "@tomtom-international/web-sdk-services";
import "@tomtom-international/web-sdk-maps/dist/maps.css";

const cx = classNames.bind(styles);
const API_KEY = "f7C29vC7ZGyd87eF6XnbmMaGVcIHAibM";
const SAN_FRANCISCO = [108.20623, 16.047079];

function Location() {
  const driverstate = useContext(UserContext);
  const [lngLatNow, getLngLatNow] = useState("");
  const [para, getPara] = useState({});

  const [driver1, setDriver1] = useState({});
  const [driver2, setDriver2] = useState({});
  const [driver3, setDriver3] = useState({});
  const [driver4, setDriver4] = useState({});
  const [driver5, setDriver5] = useState({});

  //API lay thong tin tai xe
  useEffect(() => {
    DriverManage()
      .then((res) => {
        setDriver1(res.data[0]);
        setDriver2(res.data[1]);
        setDriver3(res.data[2]);
        setDriver4(res.data[3]);
        setDriver5(res.data[4]);
      }, [])
      .catch((e) => console.log(e));
  }, []);

  //API Lay toa do thuc va thong so thuc
  useEffect(() => {
    getDataNow()
      .then((res) => {
        const lng = res.data[0].lng.toString(10);
        const lat = res.data[0].lat.toString(10);
        getLngLatNow(lng + "," + lat);
        getPara(res.data[0]);
      })
      .catch((e) => {
        console.log("e", e);
      });
  }, []);

  //API Geocoding
  const [data2, setData2] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.maptiler.com/geocoding/${lngLatNow}.json?key=jCgKzqnyf5RobipHaRTj`
      )
      .then((response) => {
        const json = response.data.features[0].place_name_vi;
        //console.log(json);
        setData2(json);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [lngLatNow]);
  const mapElement = useRef();
  const [map, setMap] = useState();
  const [markers, setMarkers] = useState([]);
  //const [markerdata1, setMarkerdata1] = useState({});
  //const [markerdata2, setMarkerdata2] = useState({});
  const [markersshows, setMarkershows] = useState([]);

  useEffect(() => {
    const map = tt.map({
      key: API_KEY,
      container: mapElement.current,
      center: SAN_FRANCISCO,
      zoom: 12,
    });
    setMap(map);
    return () => map.remove();
  }, []);

  useEffect(() => {
    setInterval(() => {
      getDataNow()
        .then((res) => {
          //setMarkerdata1({ lng: res.data[0].lng, lat: res.data[0].lat });
          //setMarkerdata2({ lng: res.data[1].lng, lat: res.data[2].lat });
          setMarkershows([
            { lng: res.data[0].lng, lat: res.data[0].lat },
            { lng: res.data[1].lng, lat: res.data[2].lat },
          ]);
        })
        .catch((err) => console.log(err));
    }, 5000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //console.log("markerdata", markerdata);

  const addMarker = () => {
    if (markersshows.length < 3) {
      // eslint-disable-next-line array-callback-return
      markersshows.map((markershow) => {
        let markerinput = markershow;
        //console.log("markerinput", markerinput);
        const marker = new tt.Marker().setLngLat(markerinput).addTo(map);
        //console.log("markers", marker);
        setMarkers((markers) => [...markers, marker]);
      });
    }
  };
  //setInterval(() => addMarker(), 10000);
  const clear = () => {
    markers.forEach((marker) => marker.remove());
    setMarkers([]);
  };

  // const markersroute = [
  //   { lng: 108.15550725268963, lat: 16.065601463692374 },
  //   { lng: 108.15630062960264, lat: 16.066754698809433 },
  // ];

  const route = () => {
    if (markersshows.length < 2) return;
    const key = API_KEY;
    const locations = markersshows;
    //const locations2 = [markers[1].getLngLat(), markers[2].getLngLat()];
    //const locations3 = [markers[2].getLngLat(), markers[3].getLngLat()];
    console.log("locations :", locations);
    calculateRoute(`${Math.random()}`, {
      key,
      locations,
    });
  };
  //setInterval(() => route(), 30000);
  const calculateRoute = async (number, routeOptions) => {
    try {
      const response = await services.calculateRoute(routeOptions);
      const geojson = response.toGeoJson();

      map.addLayer({
        id: number,
        type: "line",
        source: {
          type: "geojson",
          data: geojson,
        },
        paint: {
          "line-color": "red",
          "line-width": 6,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("mapwrap")}>
        <>
          <div ref={mapElement} className={cx("mapDiv")}></div>
          <button className={cx("button")} onClick={clear}>
            Clear
          </button>
          <button className={cx("routebt")} onClick={route}>
            Route
          </button>
          <button className={cx("routebt")} onClick={addMarker}>
            AddMarker
          </button>
        </>
      </div>
      {driverstate === 1 ? (
        <div className={cx("thongso")}>
          <div className={cx("thongsoitem")}>
            <FontAwesomeIcon
              icon={faTemperatureLow}
              color="#B3FFAE"
              fontSize={30}
              fontWeight={700}
            />
            <div className={cx("thongsoitemcontent")}>
              <p className={cx("thongso-item-text")}>Nhiet do</p>
              <p
                style={{
                  fontSize: "20px",
                  textAlign: "center",
                  paddingTop: "10px",
                }}>
                {para.temp}°C
              </p>
            </div>
          </div>
          <div className={cx("thongsoitem")}>
            <FontAwesomeIcon
              icon={faBoltLightning}
              color="#B3FFAE"
              fontSize={30}
            />
            <div className={cx("thongsoitemcontent")}>
              <p className={cx("thongso-item-text")}>Dien ap</p>
              <p
                style={{
                  fontSize: "20px",
                  textAlign: "center",
                  paddingTop: "10px",
                }}>
                {para.voltage}V
              </p>
            </div>
          </div>
          <div className={cx("thongsoitem")}>
            <FontAwesomeIcon icon={faGaugeHigh} color="#B3FFAE" fontSize={30} />
            <div className={cx("thongsoitemcontent")}>
              <p className={cx("thongso-item-text")}>Van toc</p>
              <p
                style={{
                  fontSize: "20px",
                  textAlign: "center",
                  paddingTop: "10px",
                }}>
                {para.distance}km/h
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className={cx("thongso")}>Tam khong co du lieu</div>
      )}
      {driverstate === 1 && (
        <InforOnMap data={driver1} number={1} location={data2} />
      )}
      {driverstate === 2 && (
        <InforOnMap data={driver2} number={0} location={data2} />
      )}
      {driverstate === 3 && (
        <InforOnMap data={driver3} number={0} location={data2} />
      )}
      {driverstate === 4 && (
        <InforOnMap data={driver4} number={0} location={data2} />
      )}
      {driverstate === 5 && (
        <InforOnMap data={driver5} number={0} location={data2} />
      )}
    </div>
  );
}

export default Location;

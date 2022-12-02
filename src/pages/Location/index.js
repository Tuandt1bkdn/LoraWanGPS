import classNames from "classnames/bind";
import styles from "./Location.module.scss";
import { useState, useEffect } from "react";
import Map from "~/components/Layout/components/Map";
//import LoadingIcon from "~/components/Layout/components/LoadingIcon";
import axios from "axios";
import { data } from "autoprefixer";
const cx = classNames.bind(styles);

function Location() {
  const [data1, setData1] = useState([]);
  const [lngLatNow, getLngLatNow] = useState("");
  const [realTime, getRealTime] = useState("");

  const url1 = "http://localhost:5000/data2";
  useEffect(() => {
    fetch(url1)
      .then((response) => response.json())
      .then((json) => {
        setData1(json);
        const lng = json[0].lng.toString(10);
        const lat = json[0].lat.toString(10);
        const time = json[0].time;
        console.log(lng + "," + lat);
        getLngLatNow(lng + "," + lat);
        getRealTime(time);
      })
      .catch((e) => {
        console.log("e", e);
      });
  }, []);
  console.log(lngLatNow);
  const [data2, setData2] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.maptiler.com/geocoding/${lngLatNow}.json?key=jCgKzqnyf5RobipHaRTj`
      )
      .then((response) => {
        const json = response.data.features[0].place_name_vi;
        console.log(json);
        setData2(json);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div className={cx("wrapper")}>
      <div className={cx("leftContent")}>
        <Map></Map>
      </div>
      <div className={cx("rightContent")}>
        <div className={cx("rightTop")}>
          <div className={cx("image")}></div>
          <div className={cx("wrapInfo")}>
            <div className={cx("contentInfo")}>
              <div className={cx("bienSoXe")}>43B-678.11</div>
              <div className={cx("viTri")}>
                <p>{data2}</p>
                <p>{realTime}</p>
              </div>
              <div className={cx("user")}>
                <div className={cx("userImage")}></div>
                <div className={cx("userInfo")}>
                  <p>Tài xế</p>
                  <div>Nguyen Van Toàn</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("rightBottom")}></div>
      </div>
    </div>
  );
}

export default Location;

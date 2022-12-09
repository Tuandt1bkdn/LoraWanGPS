import classNames from "classnames/bind";
import styles from "./Location.module.scss";
import { useState, useEffect } from "react";

//import { getDataNow } from "~/api/services/getDataAPI";
import axios from "axios";
import MapLibre from "~/components/Layout/components/Map";
import { getDataNow } from "~/api/services/getDataAPI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoltLightning,
  faGaugeHigh,
  faTemperatureLow,
} from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);

function Location() {
  const [lngLatNow, getLngLatNow] = useState("");
  //const [realTime, getRealTime] = useState("");
  const [date, getDate] = useState("");
  const [para, getPara] = useState({});
  useEffect(() => {
    getDataNow()
      .then((res) => {
        const lng = res.data[0].lng.toString(10);
        const lat = res.data[0].lat.toString(10);
        //const time = json[0];
        //console.log(lng + "," + lat);
        getLngLatNow(lng + "," + lat);
        //getRealTime(time);
        getDate(res.data[0].realtimelocal.substring(0, 8));
        getPara(res.data[0]);
      })
      .catch((e) => {
        console.log("e", e);
      });
  }, []);
  //console.log(lngLatNow);
  //console.log("date", date);
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
      <MapLibre />
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
      <div className={cx("info")}>
        <div>
          <image src="https://localfsaf" alt="anhtaixe" />
          <p>Driver Information</p>
          <p>{data2}</p>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
}

export default Location;

// <table className={cx("tableform")}>
//               <thead>
//                 <th>1</th>
//                 <th>1</th>
//                 <th>1</th>
//               </thead>
//               <tbody>
//                 <td>1</td>
//                 <td>1</td>
//                 <td>1</td>
//               </tbody>
//             </table>

// <div className={cx("rightContent")}>
//         <div className={cx("rightTop")}>
//           <div className={cx("image")}></div>
//           <div className={cx("wrapInfo")}>
//             <div className={cx("contentInfo")}>
//               <div className={cx("bienSoXe")}>43B-678.11</div>
//               <div className={cx("viTri")}>
//                 <p>{data2}</p>
//                 <p>{date}</p>
//               </div>
//               <div className={cx("user")}>
//                 <div className={cx("userImage")}></div>
//                 <div className={cx("userInfo")}>
//                   <p>Tài xế</p>
//                   <div>Nguyen Van Toàn</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className={cx("rightBottom")}>
//           <div className={cx("table")}></div>
//         </div>
//       </div>

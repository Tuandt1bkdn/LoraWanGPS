import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoltLightning,
  faGaugeHigh,
  faTemperatureLow,
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import styles from "./Location.module.scss";
import MapLibre from "~/components/Layout/components/Map";
import { DriverManage, getDataNow } from "~/api/services/getDataAPI";
import InforOnMap from "~/components/Layout/components/InforOnMap";
import { UserContext } from "~/components/Layout/DefaultLayout";

const cx = classNames.bind(styles);

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
  });

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
  });

  return (
    <div className={cx("wrapper")}>
      <MapLibre />
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

// useEffect(() => {
//   DriverManage()
//     .then((res) => {
//       const filterDriver = res.data.filter((item) => {
//         return item.iddriver === driverstate;
//       });
//       setDriver(filterDriver[0]);
//     }, [])
//     .catch((e) => console.log(e));
// });

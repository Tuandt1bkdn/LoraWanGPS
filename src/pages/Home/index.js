import React from "react";
import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import InforOnMap from "~/components/Layout/components/InforOnMap";
import { useContext } from "react";
import { UserContext } from "~/components/Layout/DefaultLayout";

const cx = classNames.bind(styles);

function Home() {
  //const [active, setActive] = useState("First State");
  const userinfo = useContext(UserContext);
  const [data2, setData2] = useState([]);
  //const [user, setUser] = useState();
  console.log("data2", data2);
  useEffect(() => {
    fetch(`http://localhost:5000/usermanage`)
      .then((response) => response.json())
      .then((json) => {
        const filterUser = json.filter((item) => {
          return item.iddriver === userinfo;
        });
        setTimeout(() => setData2(filterUser[0]), 1000);
      }, []);
  }, [userinfo]);
  console.log("data2 : ", data2);
  return (
    <div className={cx("wrapper")}>
      <InforOnMap data={data2} number={1} />
    </div>
  );
}
export default Home;

//const [data, setData] = useState([]);
//const [latLng, setLatLng] = useState([]);
//16.047079,108.206230:16.463713,107.590866

//const LatLng = "16.073,108.590:16.047,107.306";

// useEffect(() => {
//   fetch(
//     `https://api.tomtom.com/routing/1/calculateRoute/${LatLng}/json?key=eJDSsxHTG1Bm9zZUpJtTJE7HiqIBQ2BQ`
//   )
//     .then((response) => response.json())
//     .then((json) => {
//       setData(json.routes[0].summary);
//       console.log(json.routes[0].summary);
//     })
//     .catch((e) => {
//       console.log("e", e);
//     });
// }, []);

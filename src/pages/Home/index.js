import React from "react";
import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";

import { userManage } from "~/api/services/getDataAPI";
import LeftBody from "~/components/Layout/components/LeftBody";

const cx = classNames.bind(styles);

function Home() {
  //const [active, setActive] = useState("First State");
  const [data2, setData2] = useState([]);

  console.log("data2", data2);
  useEffect(() => {
    fetch(`http://localhost:5000/usermanage`)
      .then((response) => response.json())
      .then((json) => {
        setTimeout(() => setData2(json[0]), 1000);
      }, []);
  }, [data2]);

  return (
    <div>
      <div>
        <input type="text"></input>
        <button>Chat</button>
      </div>
      <div>{data2.name}</div>
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

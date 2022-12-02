//import DataTable from "react-data-table-component";
//import { response } from "express";
import React from "react";
import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";

const cx = classNames.bind(styles);
function Home() {
  //const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  //const [latLng, setLatLng] = useState([]);
  //16.047079,108.206230:16.463713,107.590866

  const LatLng = "16.073,108.590:16.047,107.306";
  useEffect(() => {
    fetch(`http://localhost:5000/data2`)
      .then((response) => response.json())
      .then((json) => {
        setData2(json);
        //setLatLng(json.routes[0].summary);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

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
  return (
    <div>
      <div>b</div>

      <table className={cx("test")}>
        <thead>
          <tr>
            <th>CustomerId</th>
            <th>Name</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {data2.map((item) => (
            <tr>
              <td>{item.realTime}</td>
              <td>{item.lat}</td>
              <td>{item.lng}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Home;

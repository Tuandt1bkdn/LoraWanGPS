import React, { useState, useEffect, useContext } from "react";
import classNames from "classnames/bind";
import styles from "./Warning.module.scss";
import { getDataNow } from "~/api/services/getDataAPI";
//import { ParaData } from "~/firebase/Data";
import LineChart from "~/components/Layout/components/LineChart";
//import {Chart as Chartjs }
import LeftBody from "~/components/Layout/components/LeftBody";
import { UserContext } from "~/components/Layout/DefaultLayout";

const cx = classNames.bind(styles);

function Warning() {
  const userinfo = useContext(UserContext);
  console.log("theme", userinfo);

  const [user1, setUser1] = useState([]);
  const [user2, setUser2] = useState([]);
  const [user3, setUser3] = useState([]);
  const [user4, setUser4] = useState([]);
  const [user5, setUser5] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/usermanage`)
      .then((response) => response.json())
      .then((json) => {
        setUser1(json[0]);
        setUser2(json[1]);
        setUser3(json[2]);
        setUser4(json[3]);
        setUser5(json[4]);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  const [data, setData] = useState({
    labels: [" 2phut truoc", "1 phut truoc", "hien tai"],
    datasets: [
      {
        label: "Temparature",
        data: [10, 45, 32],
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  useEffect(() => {
    const arr = [];
    fetch(`http://localhost:5000/alldata`)
      .then((res) => res.json())
      .then((json) => {
        console.log("json", json);

        // eslint-disable-next-line array-callback-return
        json.map((item, index) => {
          arr.push(item.temp);
          console.log("arr", arr);
          setTimeout(() => {
            setData({
              labels: [" 2phut truoc", "1 phut truoc", "hien tai"],
              datasets: [
                {
                  label: "Temparature",
                  data: arr,
                  backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0",
                  ],
                  borderColor: "black",
                  borderWidth: 2,
                },
              ],
            });
          }, 2500);
        });
      });
  }, [data]);
  console.log("data", data);

  const [datanow, setDatanow] = useState({
    temp: "",
    voltage: "",
    distance: "",
  });
  useEffect(() => {
    getDataNow()
      .then((res) => {
        setDatanow({
          temp: res.data[0].temp,
          voltage: res.data[0].voltage,
          distance: res.data[0].distance,
        });
        console.log("ABCD", res.data[0]);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const temp = datanow.temp < 30;
  const voltage = datanow.voltage > 220;
  const distance = datanow.distance < 30;
  return (
    <div className={cx("wrapper")}>
      <div className={cx("leftContent")}>
        {userinfo === "User1" && <LeftBody data={user1} />}
        {userinfo === "User2" && <LeftBody data={user2} />}
        {userinfo === "User3" && <LeftBody data={user3} />}
        {userinfo === "User4" && <LeftBody data={user4} />}
        {userinfo === "User5" && <LeftBody data={user5} />}
      </div>
      <div className={cx("rightContent")}>
        <div className={cx("rightTop")}>
          <div className={cx("boxValue")}>
            <div className={cx("headerBox")}>
              <img
                src="https://www.pngkey.com/png/full/542-5421709_cartoon-sun-temperature-element-transparent-free-event.png"
                width="40px"
                height="40px"
                alt="nd"
              />
              <p className={cx("text")}>Nhiệt độ nước làm mát</p>
            </div>
            <div className={cx("valueBox")}>
              <div className={cx("vlB")}>
                <div className={cx("value")}>
                  <p>{datanow.temp}</p>
                </div>
                <div className={cx("unit")}>
                  <p className={cx("unitStyle")}>°C</p>
                </div>
              </div>
              <div className={cx("noti")}>
                {temp ? (
                  <div className={cx("safeNoti")}>Nhiet do an toan</div>
                ) : (
                  <div className={cx("unsafeNoti")}>Nhiet do khong an toan</div>
                )}
              </div>
            </div>
          </div>
          <div className={cx("boxValue")}>
            <div className={cx("headerBox")}>
              <img
                src="https://banner2.cleanpng.com/20180703/ale/kisspng-computer-icons-electricity-symbol-icon-design-high-top-bolt-5b3ba5ac033830.9402347715306356920132.jpg"
                width="50px"
                height="40px"
                alt="nd"
              />
              <p className={cx("text")}>Điện áp bình Acquy</p>
            </div>
            <div className={cx("valueBox")}>
              <div className={cx("vlB")}>
                <div className={cx("value")}>
                  <p>{datanow.voltage}</p>
                </div>
                <div className={cx("unit")}>
                  <p className={cx("unitStyle")}>V</p>
                </div>
              </div>
              <div className={cx("noti")}>
                {voltage ? (
                  <div className={cx("safeNoti")}>Dien ap on dinh</div>
                ) : (
                  <div className={cx("unsafeNoti")}>Dien ap khong on dinh</div>
                )}
              </div>
            </div>
          </div>
          <div className={cx("boxValue")}>
            <div className={cx("headerBox")}>
              <img
                src="https://png.pngtree.com/png-clipart/20190614/original/pngtree-vector-distance-icon-png-image_3767406.jpg"
                width="40px"
                height="40px"
                alt="nd"
              />
              <p className={cx("text")}>Khoảng cách</p>
            </div>
            <div className={cx("valueBox")}>
              <div className={cx("vlB")}>
                <div className={cx("value")}>
                  <p>{datanow.distance}</p>
                </div>
                <div className={cx("unit")}>
                  <p className={cx("unitStyle")}>km</p>
                </div>
              </div>
              <div className={cx("noti")}>
                {distance ? (
                  <div className={cx("safeNoti")}>Trong vung cho phep</div>
                ) : (
                  <div className={cx("unsafeNoti")}>Ngoai vung cho phep</div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className={cx("rightBottom")}>
          <div className={cx("chart")}>
            <LineChart data={data} />
          </div>
          <div className={cx("choose")}>
            <button className={cx("button")} /*onClick={handleChart()} */>
              Nhiệt độ nước
            </button>
            <button className={cx("button")}>Điện áp Acquy</button>
            <button className={cx("button")}>Vận tốc</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Warning;

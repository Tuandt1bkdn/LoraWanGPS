import React, { useState, useEffect, useContext } from "react";
import classNames from "classnames/bind";
import styles from "./Warning.module.scss";
import { DriverManage, getDataNow } from "~/api/services/getDataAPI";
import LineChart from "~/components/Layout/components/LineChart";
import LeftBody from "~/components/Layout/components/LeftBody";
import { UserContext } from "~/components/Layout/DefaultLayout";

const cx = classNames.bind(styles);

function Warning() {
  const userinfo = useContext(UserContext);

  const [user1, setUser1] = useState([]);
  const [user2, setUser2] = useState([]);
  const [user3, setUser3] = useState([]);
  const [user4, setUser4] = useState([]);
  const [user5, setUser5] = useState([]);

  useEffect(() => {
    DriverManage()
      .then((res) => {
        setUser1(res.data[0]);
        setUser2(res.data[1]);
        setUser3(res.data[2]);
        setUser4(res.data[3]);
        setUser5(res.data[4]);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  const [data, setData] = useState({
    labels: ["", "", "", "", ""],
    datasets: [
      {
        label: "Temparature",
        data: [23, 25, 32, 29, 27],
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
    const timelabel = [];
    const temp = [];
    const voltage = [];
    const distance = [];
    //const datachart = [];
    getDataNow().then((res) => {
      const json = res.data;
      // eslint-disable-next-line array-callback-return
      json.map((item, index) => {
        temp.push(item.temp);
        voltage.push(item.voltage);
        distance.push(item.distance);
        timelabel.push(item.realtimelocal.substring(0, 8));
        setTimeout(() => {
          setData({
            labels: timelabel.reverse(),
            datasets: [
              {
                label: "Temparature",
                data: temp.reverse(),
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
        }, 3000);
      });
    });
  }, [data]);

  const [datanow, setDatanow] = useState({
    temp: "",
    voltage: "",
    distance: "",
  });
  useEffect(() => {
    getDataNow()
      .then((res) => {
        setTimeout(() => {
          setDatanow({
            temp: res.data[0].temp,
            voltage: res.data[0].voltage,
            distance: res.data[0].distance,
          });
        }, 1000);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [datanow]);

  const temp = datanow.temp < 30;
  const voltage = datanow.voltage > 220;
  const distance = datanow.distance < 15;
  return (
    <div className={cx("wrapper")}>
      <div className={cx("leftContent")}>
        {userinfo === 1 && <LeftBody data={user1} />}
        {userinfo === 2 && <LeftBody data={user2} />}
        {userinfo === 3 && <LeftBody data={user3} />}
        {userinfo === 4 && <LeftBody data={user4} />}
        {userinfo === 5 && <LeftBody data={user5} />}
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

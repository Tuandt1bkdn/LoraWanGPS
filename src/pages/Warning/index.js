import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./Warning.module.scss";
import { getDataNow } from "~/api/services/getDataAPI";
//import { ParaData } from "~/firebase/Data";
import LineChart from "~/components/Layout/components/LineChart";
//import {Chart as Chartjs }
import LeftBody from "~/components/Layout/components/LeftBody";

const cx = classNames.bind(styles);

function Warning() {
  const [data, setData] = useState({
    labels: ["hien tai", "1 phut truoc", "2 phut truoc"],
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

  const [timenow, setTimenow] = useState([]);

  useEffect(() => {
    const arr = [];
    fetch(`http://localhost:5000/data2`)
      .then((res) => res.json())
      .then((json) => {
        console.log("json", json);
        // eslint-disable-next-line array-callback-return
        json.map((item, index) => {
          arr.push(item.lat);
          console.log("arr", arr);
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
        });
      });
  }, []);
  console.log("data", data);
  useEffect(() => {
    getDataNow()
      .then((res) => {
        setTimenow(res.data);
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [timenow]);
  const temp = 5 > 3;
  const voltage = 3 > 4;
  const distance = 100 < 150;
  return (
    <div className={cx("wrapper")}>
      <div className={cx("leftContent")}>
        <LeftBody />
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
                  <p>123.456</p>
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
                  <p>123.456</p>
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
                  <p>123.456</p>
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
          <LineChart data={data} />
        </div>
      </div>
    </div>
  );
}

export default Warning;

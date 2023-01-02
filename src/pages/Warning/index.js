import React, { useState, useEffect, useContext } from "react";
import classNames from "classnames/bind";
import styles from "./Warning.module.scss";
import { DriverManage, getDataNow } from "src/api/services/getDataAPI";
import LineChart from "src/components/Layout/components/LineChart";
import LeftBody from "src/components/Layout/components/LeftBody";
import { UserContext } from "src/components/Layout/DefaultLayout";

const cx = classNames.bind(styles);

function Warning() {
  const driverstate = useContext(UserContext);
  //const release = useContext()

  const [user1, setUser1] = useState([]);
  const [user2, setUser2] = useState([]);
  const [user3, setUser3] = useState([]);
  const [user4, setUser4] = useState([]);
  const [user5, setUser5] = useState([]);
  const [chart, setChart] = useState("tempchart");
  const [tempdata, setTempdata] = useState([]);
  const [voltagedata, setVoltagedata] = useState([]);
  const [speeddata, setSpeeddata] = useState([]);
  const [timelabeldata, setTimelabeldata] = useState([]);

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

  useEffect(() => {
    setInterval(() => {
      //recall API
      getDataNow().then((res) => {
        const json = res.data;
        setTempdata([
          json[4].temp,
          json[3].temp,
          json[2].temp,
          json[1].temp,
          json[0].temp,
        ]);
        setVoltagedata([
          json[4].voltage,
          json[3].voltage,
          json[2].voltage,
          json[1].voltage,
          json[0].voltage,
        ]);
        setSpeeddata([
          json[4].speed,
          json[3].speed,
          json[2].speed,
          json[1].speed,
          json[0].speed,
        ]);
        setTimelabeldata([
          json[4].realtimelocal.substring(0, 8),
          json[3].realtimelocal.substring(0, 8),
          json[2].realtimelocal.substring(0, 8),
          json[1].realtimelocal.substring(0, 8),
          json[0].realtimelocal.substring(0, 8),
        ]);
      });
    }, 30000);
  }, []);
  //console.log("tempdata", tempdata);
  const [datanow, setDatanow] = useState({
    temp: "",
    voltage: "",
    speed: "",
  });
  useEffect(() => {
    setInterval(() => {
      getDataNow()
        .then((res) => {
          setDatanow({
            temp: res.data[0].temp,
            voltage: res.data[0].voltage,
            speed: res.data[0].speed,
          });
        })
        .catch((e) => {
          console.log(e);
        });
    }, [5000]);
  }, []);
  const temp = datanow.temp < 30;
  const voltage = datanow.voltage < 15;
  const speed = datanow.speed < 75;
  return (
    <div className={cx("wrapper")}>
      <div className={cx("leftContent")}>
        {driverstate === 1 && <LeftBody data={user1} />}
        {driverstate === 2 && <LeftBody data={user2} />}
        {driverstate === 3 && <LeftBody data={user3} />}
        {driverstate === 4 && <LeftBody data={user4} />}
        {driverstate === 5 && <LeftBody data={user5} />}
      </div>
      <div className={cx("rightContent")}>
        <div className={cx("rightTop")}>
          <div className={cx("boxValue")}>
            <div className={cx("headerBox")}>
              <img
                src="https://www.pngkey.com/png/full/542-5421709_cartoon-sun-temperature-element-transparent-free-event.png"
                width="40px"
                height="30px"
                alt="nd"
                style={{
                  marginLeft: 15,
                }}
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
                  <div className={cx("safeNoti")}>Nhiệt độ tốt</div>
                ) : (
                  <div className={cx("unsafeNoti")}>
                    Nhiệt độ cao hơn mức đề ra
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className={cx("boxValue")}>
            <div className={cx("headerBox")}>
              <img
                src="https://www.pngplay.com/wp-content/uploads/6/Yellow-High-Voltage-Transparent-PNG.png"
                width="50px"
                height="40px"
                alt="nd"
                style={{
                  marginLeft: 15,
                }}
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
                  <div className={cx("safeNoti")}>Điện áp ổn định</div>
                ) : (
                  <div className={cx("unsafeNoti")}>Điện áp không ổn định</div>
                )}
              </div>
            </div>
          </div>
          <div className={cx("boxValue")}>
            <div className={cx("headerBox")}>
              <img
                src="https://www.transparentpng.com/thumb/speed/oXHTYr-speed-green-indicator-vector-image.png"
                width="40px"
                height="40px"
                alt="nd"
                style={{
                  marginLeft: 15,
                }}
              />
              <p className={cx("text")}>Vận tốc</p>
            </div>
            <div className={cx("valueBox")}>
              <div className={cx("vlB")}>
                <div className={cx("value")}>
                  <p>{datanow.speed}</p>
                </div>
                <div className={cx("unit")}>
                  <p className={cx("unitStyle")}>km/h</p>
                </div>
              </div>
              <div className={cx("noti")}>
                {speed ? (
                  <div className={cx("safeNoti")}>Vận tốc cho phép</div>
                ) : (
                  <div className={cx("unsafeNoti")}>Vận tốc quá cao</div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className={cx("rightBottom")}>
          <div className={cx("chart")}>
            {chart === "tempchart" && (
              <LineChart
                data={tempdata}
                label={timelabeldata}
                type="Temparature"
              />
            )}
            {chart === "voltchart" && (
              <LineChart
                data={voltagedata}
                label={timelabeldata}
                type="Voltage"
              />
            )}
            {chart === "speedchart" && (
              <LineChart data={speeddata} label={timelabeldata} type="Speed" />
            )}
          </div>
          <div className={cx("choose")}>
            <button
              className={cx("button")}
              onClick={() => setChart("tempchart")}>
              Nhiệt độ nước
            </button>
            <button
              className={cx("button")}
              onClick={() => setChart("voltchart")}>
              Điện áp Acquy
            </button>
            <button
              className={cx("button")}
              onClick={() => setChart("speedchart")}>
              Vận tốc
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Warning;

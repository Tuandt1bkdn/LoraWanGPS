import React from "react";
import classNames from "classnames/bind";
import styles from "./Warning.module.scss";
import { WiThermometer } from "weather-icons-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarBattery, faRetweet } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Warning() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("test1")}>
        <div className={cx("temp")}>
          <div className={cx("title-parameter")}>
            <WiThermometer size={50} color="#000" />
            <div>Nhiệt độ nước làm mát</div>
          </div>
          <div className={cx("temp-content")}>
            <div className={cx("temp-value")}>30</div>
            <div className={cx("temp-unit")}>°C</div>
          </div>
        </div>
        <div className={cx("volt")}>
          <div className={cx("title-parameter")}>
            <FontAwesomeIcon icon={faCarBattery} className={cx("icon")} />
            <div className={cx("text-volt")}>Điện áp bình Acquy</div>
          </div>
        </div>
        <div className={cx("dist")}>
          <div className={cx("title-parameter")}>
            <FontAwesomeIcon icon={faRetweet} className={cx("icon")} />
            <div className={cx("text-volt")}>Khoảng cách với Trung tâm</div>
          </div>
        </div>
      </div>
      <div className={cx("test2")}></div>
      <div className={cx("test3")}></div>
    </div>
  );
}

export default Warning;

import React from "react";
import classNames from "classnames/bind";
import styles from "./InforOnMap.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faPhone } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
function InforOnMap({ data, number, location }) {
  return (
    <div className={cx("info")}>
      <div className={cx("info__headerinfo")}>
        <div className={cx("info__headerinfo-left")}>
          <img
            src="https://i.pinimg.com/736x/bb/1f/9c/bb1f9c30bc815087d52d1e5e86cde219.jpg"
            alt="anhtaixe"
            style={{
              display: "block",
              width: "70px",
              height: "70px",
              borderRadius: "50%",
              objectFit: "fill",
            }}
          />
          <div className={cx("info_headerinfo-name")}>
            <p
              style={{
                fontSize: "22px",
                fontWeight: 600,
              }}>
              {data.name}
            </p>
            <p
              style={{
                fontSize: "16px",
                fontWeight: 500,
                color: "#B2B2B2",
              }}>
              Tài xế
            </p>
          </div>
        </div>
        <div className={cx("info_headerinfo-right")}>
          <div className={cx("info_callnumber")}>
            <div className={cx("callbutton")}>
              <FontAwesomeIcon icon={faPhone} className={cx("mobileicon")} />
              <p>Gọi</p>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className={cx("info_contentinfo")}>
        <div className={cx("info_contentinfo-item")}>
          <p className={cx("item_title")}>Mã tài xế</p>
          <p className={cx("item_data")}>{data.iddriver}</p>
        </div>
        <div className={cx("info_contentinfo-item")}>
          <p className={cx("item_title")}>Loại xe</p>
          <p className={cx("item_data")}>{data.car}</p>
        </div>
        <div className={cx("info_contentinfo-item")}>
          <p className={cx("item_title")}>Biển số</p>
          <p className={cx("item_data")}>{data.platenumber}</p>
        </div>
        <div className={cx("info_contentinfo-item")}>
          <p className={cx("item_title")}>Loại hình thuê</p>
          <p className={cx("item_data")}>{data.renttype}</p>
        </div>
      </div>
      <div className={cx("info_bottom")}>
        <div className={cx("info_bottom-time")}>
          <FontAwesomeIcon icon={faClock} className={cx("timeicon")} />
          <div>{new Date().toLocaleString("vi-VN")}</div>
        </div>
        <div className={cx("info_bottom-location")}>
          {number === 1 ? (
            <div>{location}</div>
          ) : (
            <div>Xe đang tạm nghỉ, vị trí tại thời điểm gần nhất là : </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default InforOnMap;

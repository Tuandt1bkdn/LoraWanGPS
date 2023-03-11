/* eslint-disable array-callback-return */
import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./InforOnMap.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faPhone } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useEffect } from "react";
import { GetSaveAddress } from "src/api/services/getDataAPI";
import { withErrorBoundary } from "react-error-boundary";
//import { remove } from "firebase/database";

const cx = classNames.bind(styles);

function InforOnMap({ data, number, location, time }) {
  const [show, setShow] = useState(false);
  const [address, setAddress] = useState([]);

  function handleSave() {
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
      },
    };
    const body = {
      idcar: data.iddriver,
      time: time,
      address: location,
    };
    //console.log("body", body);
    body.idcar &&
      body.time &&
      body.address &&
      axios.post("http://localhost:5000/saveaddress", body, axiosConfig).then();
  }

  function handleDeleteAddress(id) {
    axios.delete(`http://localhost:5000/saveaddress/${id}`).then();
  }

  const handleShowAddress = () => {
    setShow(!show);
  };

  useEffect(() => {
    setInterval(() => {
      GetSaveAddress()
        .then((res) => {
          setAddress(res.data);
        })
        .catch((e) => {});
    }, 1000);
  }, []);

  return (
    <>
      {show && (
        <div className="fixed w-[500px] min-h-[200px] bottom-[350px] right-[50px] bg-white/70 z-10 rounded-[15px]">
          <div className="w-full h-14  flex flex-row justify-center items-center text-[20px]">
            Các vị trí đã lưu
          </div>
          <div className="w-full h-[250px] overflow-y-scroll">
            <table className="ml-[5px] border-solid border-[black] border-b">
              <thead className="">
                <tr className="flex flex-row items-center">
                  <th className="text-[15px] w-[130px] h-[50px] font-medium flex flex-row justify-center items-center border-t border-l border-solid border-[black]">
                    Thời gian
                  </th>
                  <th className="text-[15px] w-[300px] h-[50px] font-medium flex flex-row justify-center items-center border-t border-l border-r border-solid border-[black]">
                    Vị trí
                  </th>
                  <th className="text-[15px] font-medium flex flex-row justify-center items-center h-[50px] w-[40px] border-t border-r border-solid border-[black]">
                    #
                  </th>
                </tr>
              </thead>
              <tbody>
                <>
                  {address.length &&
                    address.map((item, index) => (
                      <tr
                        key={index}
                        className="flex flex-row items-center"
                        id={item.id}>
                        <th className="text-[15px] w-[130px] h-[70px] font-medium flex flex-row justify-center items-center border-t border-l border-[black]">
                          {item.time}
                        </th>
                        <th className="text-[15px] w-[300px] h-[70px] font-medium flex flex-row justify-center items-center border-t border-r border-l border-[black]">
                          {item.address}
                        </th>
                        <th className="text-[15px] w-[40px] h-[70px] font-medium flex flex-row justify-center items-center border-t border-r border-[black]">
                          <button onClick={() => handleDeleteAddress(item.id)}>
                            Xoá
                          </button>
                        </th>
                      </tr>
                    ))}
                </>
              </tbody>
            </table>
          </div>
        </div>
      )}
      {data === undefined ? (
        <div className={cx("info")}>
          <h2>Server không ổn định ...Hãy F5 để thử lại</h2>
        </div>
      ) : (
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
                  <FontAwesomeIcon
                    icon={faPhone}
                    className={cx("mobileicon")}
                  />
                  <p>Gọi</p>
                </div>
              </div>
              {number === 1 ? (
                <div className={cx("save_show")}>
                  <div
                    className="flex w-1/2 justify-center items-center border-r border-r-neutral-400 border-solid cursor-pointer text-[19px] font-semibold text-white"
                    onClick={() => handleSave()}>
                    <p className={cx("text_Roboto")}>Lưu</p>
                  </div>
                  <div
                    className="flex w-1/2 justify-center items-center cursor-pointer text-[19px] font-semibold text-white"
                    onClick={handleShowAddress}>
                    {!show ? (
                      <p className={cx("text_Roboto")}>Hiển thị</p>
                    ) : (
                      <p className={cx("text_Roboto")}>Ẩn</p>
                    )}
                  </div>
                </div>
              ) : (
                <div></div>
              )}
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
              <div>{time}</div>
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
      )}
    </>
  );
}

function ErrorComponent() {
  return <div>Da xay ra loi, hay F5 thu</div>;
}
export default withErrorBoundary(InforOnMap, {
  FallbackComponent: ErrorComponent,
});

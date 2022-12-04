import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./Manage.module.scss";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);

function Manage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/usermanage`)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        console.log(json);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const navigate = useNavigate();
  const routeChange = () => {
    let path = `/thongso`;
    navigate(path);
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <div className={cx("leftHeader")}>
          <div className={cx("icon")}>
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <div>
            <input
              type="text"
              placeholder="Tim kiem nhanh"
              className={cx("timkiem")}
            />
          </div>
        </div>
        <div className={cx("rightHeader")}>
          <img
            src="https://toigingiuvedep.vn/wp-content/uploads/2021/07/mau-anh-the-dep-lam-the-can-cuoc.jpg"
            className={cx("image")}
            alt="avatar"
          />
          <div className={cx("text")}>Mr. Hung</div>
          <div className={cx("icon")}>
            <button className={cx("logout")}>Thoát</button>
          </div>
        </div>
      </div>
      <div className={cx("body")}>
        <div className={cx("topBody")}>
          <div className={cx("stateRent")}>
            <div className={cx("leftImage1")}></div>
            <div className={cx("state")}>
              <p className={cx("text1")}>Xe cho thuê</p>
              <p className={cx("text2")}>{data.length}</p>
            </div>
          </div>
          <div className={cx("stateRent")}>
            <div className={cx("leftImage2")}></div>
            <div className={cx("state")}>
              <p className={cx("text1")}>Đang hoạt động</p>
              <p className={cx("text2")}>1</p>
            </div>
          </div>
          <div className={cx("stateRent")}>
            <div className={cx("leftImage3")}></div>
            <div className={cx("state")}>
              <p className={cx("text1")}>Đang nghỉ</p>
              <p className={cx("text2")}>4</p>
            </div>
          </div>
        </div>
        <div className={cx("bottomBody")}>
          <table className={cx("table")}>
            <thead>
              <tr>
                <th className={cx("nameTB")}>Họ và Tên</th>
                <th className={cx("phoneTB")}>Số điện thoại</th>
                <th className={cx("typeTB")}>Loại xe</th>
                <th className={cx("bienso")}>Biển số</th>
                <th className={cx("timeRent")}>Ngày bắt đầu thuê</th>
                <th className={cx("typeRent")}>Loại hình thuê</th>
                <th className={cx("stateTB")}>Trạng thái</th>
                <th className={cx("nameTB2")}></th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, id) => (
                <tr>
                  <td className={cx("nameTB2")}>{item.name}</td>
                  <td className={cx("nameTB2")}>{item.phone}</td>
                  <td className={cx("nameTB2")}>{item.nameOfCar}</td>
                  <td className={cx("nameTB2")}>{item.bienso}</td>
                  <td className={cx("nameTB2")}>{item.dateRent}</td>
                  <td className={cx("nameTB2")}>{item.typeRent}</td>
                  <td className={cx("nameTB2")}>{item.state}</td>
                  <td className={cx("nameTB2")}>
                    <button onClick={routeChange}>Kiem tra</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Manage;

// <tr>
//   <td className={cx("nameTB2")}>Soos</td>
//   <td className={cx("phoneTB2")}>Số điện thoại</td>
//   <td className={cx("typeTB2")}>Loại xe</td>
//   <td className={cx("bienso2")}>Biển số</td>
//   <td className={cx("timeRent2")}>Ngày bắt đầu thuê</td>
//   <td className={cx("typeRent2")}>Loại hình thuê</td>
//   <td className={cx("stateTB2")}>Trạng thái</td>

// </tr>
// <tr>
//   <td className={cx("nameTB2")}>Soos</td>
//   <td className={cx("phoneTB2")}>Số điện thoại</td>
//   <td className={cx("typeTB2")}>Loại xe</td>
//   <td className={cx("bienso2")}>Biển số</td>
//   <td className={cx("timeRent2")}>Ngày bắt đầu thuê</td>
//   <td className={cx("typeRent2")}>Loại hình thuê</td>
//   <td className={cx("stateTB2")}>Trạng thái</td>
//   <td className={cx("nameTB2")}>
//     <button onClick={routeChange}>Kiem tra</button>
//   </td>
// </tr>
// <tr>
//   <td className={cx("nameTB2")}>Soos</td>
//   <td className={cx("phoneTB2")}>Số điện thoại</td>
//   <td className={cx("typeTB2")}>Loại xe</td>
//   <td className={cx("bienso2")}>Biển số</td>
//   <td className={cx("timeRent2")}>Ngày bắt đầu thuê</td>
//   <td className={cx("typeRent2")}>Loại hình thuê</td>
//   <td className={cx("stateTB2")}>Trạng thái</td>
//   <td className={cx("nameTB2")}>
//     <button onClick={routeChange}>Kiem tra</button>
//   </td>
// </tr>
// <tr>
//   <td className={cx("nameTB2")}>Soos</td>
//   <td className={cx("phoneTB2")}>Số điện thoại</td>
//   <td className={cx("typeTB2")}>Loại xe</td>
//   <td className={cx("bienso2")}>Biển số</td>
//   <td className={cx("timeRent2")}>Ngày bắt đầu thuê</td>
//   <td className={cx("typeRent2")}>Loại hình thuê</td>
//   <td className={cx("stateTB2")}>Trạng thái</td>
//   <td className={cx("nameTB2")}>
//     <button onClick={routeChange}>Kiem tra</button>
//   </td>
// </tr>

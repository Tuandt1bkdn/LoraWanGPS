import classNames from "classnames/bind";
import styles from "./LeftBody.module.scss";
//import { userManage } from "~/api/services/getDataAPI";
import { useState, useEffect } from "react";

const cx = classNames.bind(styles);
function LeftBody({ data, useractive }) {
  // console.log("useractive:", useractive);
  //const [data2, setData2] = useState([]);

  // useEffect(() => {
  //   fetch(`http://localhost:5000/usermanage`)
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setData2(json[0]);
  //       //setLatLng(json.routes[0].summary);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // }, []);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <div className={cx("headerDrawer")}>THONG TIN CHUNG</div>
        <div className={cx("content")}>
          <div className={cx("content1")}>
            <div className={cx("content1_1")}>
              <div className={cx("image")}></div>
              <div className={cx("info1")}>
                <div className={cx("info2")}>
                  <p className={cx("text")}>Họ và Tên : {data.name}</p>
                </div>
                <div className={cx("info2")}>
                  <p className={cx("text")}>Ngày sinh : 23/02/1983</p>
                </div>
                <div className={cx("info2")}>
                  <p className={cx("text")}>CCCD : 0439 0000 1912</p>
                </div>
                <div className={cx("info2")}>
                  <p className={cx("text")}>Số điện thoại : {data.phone}</p>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div className={cx("body")}>
        <div className={cx("img")}>
          <img
            src="https://picar.vn/wp-content/uploads/2022/05/xe-gia-dinh-4-cho.png"
            alt="xe o to"
            width="100%"
            height="auto"
          />
          <div className={cx("textBody")}>
            <div className={cx("text")}>
              <p>Loại xe : Toyota</p>
            </div>
            <div className={cx("text")}>
              <p>Số chỗ : 5</p>
            </div>
            <div className={cx("text")}>
              <p>Biển số : 43B - 232.15</p>
            </div>
            <div className={cx("text")}>
              <p>Ngày bắt đầu thuê: 13/04/2022</p>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("footer")}>
        <div className={cx("footer1")}>
          <a href="http://ete.dut.udn.vn/" className={cx("linkto")}>
            Khoa Dien Tu - Vien Thong
          </a>
        </div>
        <div className={cx("footer1")}>
          <a
            href="https://dsa.org.vn/trung-tam-phat-trien-ha-tang-cntt/"
            className={cx("linkto")}>
            Trung tam Phat trien Ha tang CNTT Da Nang
          </a>
        </div>
        <div className={cx("footer1")}>
          <a href="http://ete.dut.udn.vn/" className={cx("linkto")}>
            Visit My Social Media Account
          </a>
        </div>
      </div>
    </div>
  );
}

export default LeftBody;

// <div className={cx("header")}>

// </div>

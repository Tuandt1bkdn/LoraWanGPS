import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import quanlytaixe from "/public/quanlytaixe.png";
import dinhvi from "/public/dinhvi.png";
import thongso from "/public/thongso.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesDown,
  faAnglesUp,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);

function Home() {
  const [intro1, setIntro1] = useState(false);
  const [intro2, setIntro2] = useState(false);
  const [intro3, setIntro3] = useState(false);
  const [gioithieu_box1, setGioithieu_box1] = useState("gioithieu_box_leave");
  const [gioithieu_box2, setGioithieu_box2] = useState("gioithieu_box_leave");
  const [gioithieu_box3, setGioithieu_box3] = useState("gioithieu_box_leave");
  console.log("re-render");
  return (
    <div className={cx("wrapper")}>
      <Carousel
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        className={cx("carousel")}>
        <div>
          <img
            src="https://www.sam-solutions.com/blog/wp-content/uploads/2018/04/IoT-in-automotive-industry.png"
            alt="anh1"
            className={cx("imagecarousel")}
          />
          <p className="legend" style={{ fontSize: 20, fontWeight: 300 }}>
            IoT là xu hướng mới của thế giới
          </p>
        </div>
        <div>
          <img
            src="https://cdn.tgdd.vn/Files/2022/01/24/1412680/tim-hieu-ve-mang-lorawan-va-co-che-hoat-dong-nhu-t.jpg"
            alt="anh2"
            className={cx("imagecarousel")}
          />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img
            src="https://cdnimg.vietnamplus.vn/t660/uploaded/rutmzt/2015_06_11/vi_mach123rfcom.jpg"
            alt="anh3"
            className={cx("imagecarousel")}
          />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
      <div className={cx("gioithieu")}>
        <div className={cx("gioithieu_boxwrap")}>
          <div
            className={cx(`${gioithieu_box1}`)}
            onMouseEnter={() => {
              setIntro1(true);
              setGioithieu_box1("gioithieu_box_enter");
            }}
            onMouseLeave={() => {
              setIntro1(false);
              setGioithieu_box1("gioithieu_box_leave");
            }}>
            <img
              src={quanlytaixe}
              alt="anh gioi thieu 1"
              className={cx("gioithieu_img")}
            />
            {intro1 && (
              <div className={cx("intro_text")}>Quản lý danh sách tài xế</div>
            )}
          </div>
          <div
            className={cx(`${gioithieu_box2}`)}
            onMouseEnter={() => {
              setIntro2(true);
              setGioithieu_box2("gioithieu_box_enter");
            }}
            onMouseLeave={() => {
              setIntro2(false);
              setGioithieu_box2("gioithieu_box_leave");
            }}>
            <img
              src={dinhvi}
              alt="anh gioi thieu 1"
              className={cx("gioithieu_img")}
            />
            {intro2 && (
              <div className={cx("intro_text")}>Giám sát vị trí hiện tại</div>
            )}
          </div>
          <div
            className={cx(`${gioithieu_box3}`)}
            onMouseEnter={() => {
              setIntro3(true);
              setGioithieu_box3("gioithieu_box_enter");
            }}
            onMouseLeave={() => {
              setIntro3(false);
              setGioithieu_box3("gioithieu_box_leave");
            }}>
            <img
              src={thongso}
              alt="anh gioi thieu 1"
              className={cx("gioithieu_img")}
            />
            {intro3 && (
              <div className={cx("intro_text")}>
                Thông số các cảm biến và biểu đồ
              </div>
            )}
          </div>
        </div>
        <div className={cx("step")}>
          <div className={cx("tongquan_top")}>
            <p
              style={{
                fontSize: 30,
                color: "#ccc",
              }}>
              LoRaWAN GPS
            </p>
            <p>
              Sử dụng công nghệ mạng LoRaWAN và GateWay để thu thập dữ liệu, đưa
              lên The Things Stack và chuyển vào hệ quản trị cơ sở dữ liệu
              MySQL, hiển thị thông số lên giao diện người dùng
            </p>
          </div>
          <div className={cx("tongquan_bottom")}>
            <div className={cx("step_bottom3")}>
              <div className={cx("step_bottom_top")}>
                <FontAwesomeIcon
                  icon={faAnglesDown}
                  style={{ fontSize: 30, padding: 10 }}
                />
                <p style={{ fontSize: 30 }}>Collect</p>
              </div>
              <div className={cx("step_bottom_bottom")}>
                <p>Dữ liệu cảm biến được đẩy lên The Things Stack</p>
              </div>
            </div>
            <div className={cx("step_bottom3")}>
              <div className={cx("step_bottom_top")}>
                <FontAwesomeIcon
                  icon={faDatabase}
                  style={{ fontSize: 30, padding: 10 }}
                />
                <p style={{ fontSize: 30 }}>Save</p>
              </div>
              <div className={cx("step_bottom_bottom")}>
                <p>
                  Node-RED sẽ lấy dữ liệu nhận được và đưa vào MySQL database
                </p>
              </div>
            </div>
            <div className={cx("step_bottom3")}>
              <div className={cx("step_bottom_top")}>
                <FontAwesomeIcon
                  icon={faAnglesUp}
                  style={{ fontSize: 30, padding: 10 }}
                />
                <p style={{ fontSize: 30 }}>Show</p>
              </div>
              <div className={cx("step_bottom_bottom")}>
                <p>Thông số, vị trí, đường đi được hiển thị lên web</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

import classNames from "classnames/bind";
//import Tippy from "@tippyjs/react/headless";
import styles from "./Header.module.scss";
import Button from "../Button";
// import { Wrapper as UserMenu } from "../Popper";

import Avatar from "../Popper/Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleInfo,
  faClockRotateLeft,
  faGear,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

const AVATAR_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faCircleInfo} />,
    title: "Thông tin",
    to: "/info",
  },
  {
    icon: <FontAwesomeIcon icon={faClockRotateLeft} />,
    title: "Lịch sử",
    to: "/history",
  },
  {
    icon: <FontAwesomeIcon icon={faGear} />,
    title: "Điều chỉnh",
    to: "/change",
  },
  {
    icon: <FontAwesomeIcon icon={faSignOut} />,
    title: "Đăng xuất",
    to: "/login",
  },
];

function Header() {
  const currentUser = true;
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <span className={cx("location")}>
          <div className={cx("image")} />
        </span>
        <div className={cx("title")}>
          <b>LoRaWAN GPS</b>
        </div>
        <div className={cx("action")}>
          {currentUser ? (
            <Avatar items={AVATAR_ITEMS}>
              <img
                src="https://photocross.net/wp-content/uploads/2020/03/anh-chan-dung.jpg"
                className={cx("avatar")}
                alt="Nguyen Anh Tuan"
              />
            </Avatar>
          ) : (
            <>
              <Button primary>Đăng nhập</Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;

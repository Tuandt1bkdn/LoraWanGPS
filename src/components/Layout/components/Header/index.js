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
import Sidebar from "../Sidebar";

const cx = classNames.bind(styles);

const AVATAR_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faCircleInfo} />,
    title: "Thông tin",
    to: "/thong-tin",
  },
  {
    icon: <FontAwesomeIcon icon={faClockRotateLeft} />,
    title: "Lịch sử",
    to: "/lich-su",
  },
  {
    icon: <FontAwesomeIcon icon={faGear} />,
    title: "Điều chỉnh",
    to: "/kiem-tra",
  },
  {
    icon: <FontAwesomeIcon icon={faSignOut} />,
    title: "Đăng xuất",
    to: "/",
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
        <Sidebar />
      </div>
      <div className={cx("action")}>
        <div className={cx("rightHeader")}>
          {currentUser ? (
            <Avatar items={AVATAR_ITEMS}>
              <div className={cx("avatar_wrapper")}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png?w=360"
                  className={cx("avatar")}
                  alt="Nguyen Anh Tuan"
                />
                <div>username123</div>
              </div>
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

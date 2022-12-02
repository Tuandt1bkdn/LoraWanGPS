import classNames from "classnames/bind";
import styles from "./Searching.module.scss";

import Map from "~/components/Layout/components/Map";
//import Type from "~/components/Layout/components/Type";

const cx = classNames.bind(styles);

function Searching() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("type-wrap")}>
        <div className={cx("type")}>
          <div className={cx("icon1")}></div>
          <input
            type="text"
            className={cx("search-input")}
            placeholder="Nhập địa điểm bắt đầu"
          />
        </div>
        <div className={cx("type")}>
          <div className={cx("icon2")}></div>
          <input
            type="text"
            className={cx("search-input")}
            placeholder="Nhập địa điểm đến"
          />
        </div>
      </div>
      <Map></Map>
    </div>
  );
}

export default Searching;

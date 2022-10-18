import classNames from "classnames/bind";
import styles from "./Map.module.scss";

const cx = classNames.bind(styles);

function Map() {
  return <div className={cx("map")}></div>;
}

export default Map;

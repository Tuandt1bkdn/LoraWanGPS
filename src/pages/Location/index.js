import classNames from "classnames/bind";
import styles from "./Location.module.scss";
import Button from "~/components/Layout/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import Map from "~/components/Layout/components/Map";

const cx = classNames.bind(styles);

function Location() {
  return (
    <div>
      <div className={cx("checking-location")}>
        <Button checking>Kiểm tra</Button>
        <FontAwesomeIcon icon={faSpinner} />
      </div>
      <div className={cx("checkinfo")}>
        <div className={cx("checktime")}>
          Giờ kiểm tra: hh/mm/ss yyyy/mm/dd{" "}
        </div>
        <div className={cx("checktime")}>Toạ độ : abcdêfe</div>
      </div>
      <Map></Map>
    </div>
  );
}

export default Location;

import classNames from "classnames/bind";
import styles from "./Location.module.scss";
import { Oval } from "react-loader-spinner";
import Map from "~/components/Layout/components/Map";

const cx = classNames.bind(styles);

function Location() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("checkinfo")}>
        <div className={cx("wrapcheck")}>
          <div className={cx("checktime")}>Giờ kiểm tra:</div>
          <div className={cx("wraploading")}>
            <Oval
              height={30}
              width={30}
              color="#dcf3b5"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="#dcf3b5"
              strokeWidth={7}
              strokeWidthSecondary={7}
            />
          </div>
        </div>
        <div className={cx("wrapcheck")}>
          <div className={cx("checktime")}>Toạ độ hiện tại: </div>
          <div className={cx("wraploading")}>
            <Oval
              height={30}
              width={30}
              color="#dcf3b5"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="#dcf3b5"
              strokeWidth={7}
              strokeWidthSecondary={7}
            />
          </div>
        </div>
        <div className={cx("wrapcheck")}>
          <div className={cx("checktime")}>Vị trí hiện tại: </div>
          <div className={cx("wraploading")}>
            <Oval
              height={30}
              width={30}
              color="#dcf3b5"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="#dcf3b5"
              strokeWidth={7}
              strokeWidthSecondary={7}
            />
          </div>
        </div>
      </div>
      <Map></Map>
    </div>
  );
}

export default Location;

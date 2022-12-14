import {
  faEnvelope,
  faHome,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./Footer.module.scss";

const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className={cx("footerwrap")}>
      <div className={cx("footerbkdn")}>
        <p className={cx("titlefooter")}>KHOA ĐIỆN TỬ VIỄN THÔNG</p>
        <div className={cx("icon_tt")}>
          <FontAwesomeIcon icon={faHome} />
          <div className={cx("tt")}>
            Đại học Đà Nẵng - Trường Đại học Bách Khoa
          </div>
        </div>
        <div className={cx("icon_tt")}>
          <FontAwesomeIcon icon={faLocationDot} />
          <div className={cx("tt")}>
            54 Nguyễn Lương Bằng, Quận Liên Chiểu, TP.Đà Nẵng
          </div>
        </div>
        <div className={cx("icon_tt")}>
          <FontAwesomeIcon icon={faPhone} />
          <div className={cx("tt")}>(0236) 3841287</div>
        </div>
        <div className={cx("icon_tt")}>
          <FontAwesomeIcon icon={faEnvelope} />
          <div className={cx("tt")}> khoadtvt@dut.udn.vn</div>
        </div>
      </div>
      <div className={cx("footerdsp")}>
        <p className={cx("titlefooter")}>
          TRUNG TÂM PHÁT TRIỂN HẠ TẦNG CÔNG NGHỆ THÔNG TIN ĐÀ NẴNG
        </p>
        <div className={cx("icon_tt")}>
          <FontAwesomeIcon icon={faLocationDot} />
          <div className={cx("tt")}>
            Tòa nhà 02 Quang Trung, Phường Thạch Thang, Quận Hải Châu, Tp Đà
            Nẵng.
          </div>
        </div>
        <div className={cx("icon_tt")}>
          <FontAwesomeIcon icon={faPhone} />
          <div className={cx("tt")}>84.236.3888.666 / Fax 84.236.3888.879</div>
        </div>
        <div className={cx("icon_tt")}>
          <FontAwesomeIcon icon={faEnvelope} />
          <div className={cx("tt")}> iid@danang.gov.vn</div>
        </div>
      </div>
      <div className={cx("footericon")}>
        <div className={cx("titlefooter")}>Kết nối với chúng tôi</div>
        <div className={cx("iconcontact")}></div>
      </div>
    </div>
  );
}

export default Footer;

import {
  faEnvelope,
  faHome,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.scss";

//const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className="footer">
      <div className="container-footer">
        <div className="pt-[40px] content">
          <p className="text-2xl">KHOA ĐIỆN TỬ VIỄN THÔNG</p>
          <div className="flex mt-2">
            <FontAwesomeIcon icon={faHome} />
            <div className="ml-2">
              Đại học Đà Nẵng - Trường Đại học Bách Khoa
            </div>
          </div>
          <div className="flex mt-2">
            <FontAwesomeIcon icon={faLocationDot} />
            <div className="ml-2">
              54 Nguyễn Lương Bằng, Quận Liên Chiểu, TP.Đà Nẵng
            </div>
          </div>
          <div className="flex mt-2">
            <FontAwesomeIcon icon={faPhone} />
            <div className="ml-2">(0236) 3841287</div>
          </div>
          <div className="flex mt-2">
            <FontAwesomeIcon icon={faEnvelope} />
            <div className="ml-2"> khoadtvt@dut.udn.vn</div>
          </div>
        </div>

        <div className="pt-[40px] ml-10 content">
          <p className="text-2xl">
            TRUNG TÂM PHÁT TRIỂN HẠ TẦNG CÔNG NGHỆ THÔNG TIN ĐÀ NẴNG
          </p>
          <div className="flex mt-2">
            <FontAwesomeIcon icon={faHome} />
            <div className="ml-2">
              Tòa nhà 02 Quang Trung, Phường Thạch Thang, Quận Hải Châu, Tp Đà
              Nẵng
            </div>
          </div>
          <div className="flex mt-2">
            <FontAwesomeIcon icon={faPhone} />
            <div className="ml-2">84.236.3888.666 / Fax 84.236.3888.879</div>
          </div>
          <div className="flex mt-2">
            <FontAwesomeIcon icon={faEnvelope} />
            <div className="ml-2">iid@danang.gov.vn</div>
          </div>
        </div>

        <div className="pt-[40px] content">
          <form action="">
            <div className="flex flex-col">
              <div>
                <p className="text-2xl">KẾT NỐI VỚI CHÚNG TÔI</p>
              </div>
              <div className="md:mb-6">
                <input
                  type="text"
                  className="
          form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        "
                  id="exampleFormControlInput1"
                  placeholder="Email address"
                />
              </div>
              <div className="md:mr-auto mb-6">
                <button
                  type="submit"
                  className="inline-block px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                  Đăng kí
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* <div className={cx('footerdsp')}>
        <p className={cx('titlefooter')}>
          TRUNG TÂM PHÁT TRIỂN HẠ TẦNG CÔNG NGHỆ THÔNG TIN ĐÀ NẴNG
        </p>
        <div className={cx('icon_tt')}>
          <FontAwesomeIcon icon={faLocationDot} />
          <div className={cx('tt')}>
            Tòa nhà 02 Quang Trung, Phường Thạch Thang, Quận Hải Châu, Tp Đà
            Nẵng.
          </div>
        </div>
        <div className={cx('icon_tt')}>
          <FontAwesomeIcon icon={faPhone} />
          <div className={cx('tt')}>84.236.3888.666 / Fax 84.236.3888.879</div>
        </div>
        <div className={cx('icon_tt')}>
          <FontAwesomeIcon icon={faEnvelope} />
          <div className={cx('tt')}> iid@danang.gov.vn</div>
        </div>
      </div> */}
      {/* <div className={cx('footericon')}>
        <div className={cx('titlefooter')}>Kết nối với chúng tôi</div>
        <div className={cx('iconcontact')}></div>
      </div> */}
    </div>
  );
}

export default Footer;

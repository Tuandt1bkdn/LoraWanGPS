import classNames from "classnames/bind";
import Button from "~/components/Layout/components/Button";
import styles from "./Setting.Module.scss";

const cx = classNames.bind(styles);

function Setting() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("content1")}>
        <div className={cx("text")}>
          <div className={cx("thong-so")}>Thông số đo được : </div>
          <div className={cx("thong-so")}> Điện áp : -- V </div>
          <div className={cx("thong-so")}> Nhiệt độ nước : __*C </div>
          <div className={cx("thong-so")}> Khoảng cách : ___ m</div>
        </div>
        <Button checking>kiểm tra</Button>
      </div>
      <div className={cx("content2")}>
        <div></div>
        <div>
          <table className={cx("test")}>
            <tr>
              <th className={cx("bang")}>Ngày kiểm tra</th>
              <th className={cx("bang")}>Điện áp</th>
              <th className={cx("bang")}>Nhiệt độ nước</th>
            </tr>
            <tr>
              <th className={cx("bang")}>27/02/2012</th>
              <th className={cx("bang")}>27 V</th>
              <th className={cx("bang")}>73*C</th>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Setting;

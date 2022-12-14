import classNames from "classnames/bind";
import Button from "src/components/Layout/components/Button";
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
              <th className={cx("bang1")}>Ngày kiểm tra</th>
              <th className={cx("bang1")}>Điện áp</th>
              <th className={cx("bang1")}>Nhiệt độ nước</th>
            </tr>
            <tr>
              <th className={cx("bang2")}>27/02/2012</th>
              <th className={cx("bang2")}>27 V</th>
              <th className={cx("bang2")}>73*C</th>
            </tr>
            <tr>
              <th className={cx("bang2")}>27/02/2012</th>
              <th className={cx("bang2")}>32 V</th>
              <th className={cx("bang2")}>54*C</th>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Setting;

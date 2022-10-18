import classNames from "classnames/bind";
import styles from "./Login.module.scss";

const cx = classNames.bind(styles);

function Login() {
  return (
    <div>
      <div className={cx("login")}>
        <div className={cx("form-input")}>
          <span className={cx("input-group-text")}>Tài khoản :</span>
          <input type="text" className={cx("loginbox")} />
        </div>
        <div className={cx("form-input")}>
          <span className={cx("input-group-text")}>Mật khẩu :</span>
          <input type="text" className={cx("loginbox")} />
        </div>
      </div>
      <input type="submit" value="Đăng nhập" className={cx("buttonlogin")} />
    </div>
  );
}

export default Login;

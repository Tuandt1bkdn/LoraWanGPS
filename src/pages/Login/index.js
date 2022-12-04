import classNames from "classnames/bind";
import styles from "./Login.module.scss";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { LoginManager } from "~/api/services/getDataAPI";

const cx = classNames.bind(styles);

function Login() {
  function containsObject({ username: user, passWord: pass }, list) {
    var i;
    for (i = 0; i < list.length; i++) {
      if (list[i].userName === user && list[i].Password === pass) {
        return true;
      }
    }
    return false;
  }
  let navigate = useNavigate();
  const [login, setLogin] = useState([]);
  console.log(login);
  const [user, setUser] = useState("");
  const [pass, setPassWord] = useState("");

  const handleSubmit = () => {
    const body = {
      username: user,
      passWord: pass,
    };
    console.log("body=", body);
    var checkLogin = containsObject(body, login);

    console.log("checkLogin =", checkLogin);
    if (checkLogin === true) {
      localStorage.setItem("isAuthenticated", "true");
      console.log("isValidated", localStorage.getItem("isAuthenticated"));
      alert("nhap dung");
      navigate("quanly");
      //localStorage.clear("isAuthenticated", "true");
    } else {
      console.log("Nhap sai roi");
      alert("Nhap sai tai khoan hoac mat khau");
    }
  };

  useEffect(() => {
    LoginManager()
      .then((res) => {
        setLogin(res.data);
        console.log("setLogin", res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={cx("wrapperLogin")}>
      <div className={cx("login")}>
        <div className={cx("loginHeader")}>Đăng nhập</div>
        <div className={cx("loginBody")}>
          <div className={cx("bodyText")}>Tài khoản</div>
          <input
            type="text"
            className={cx("loginbox")}
            placeholder="example12345678"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <div className={cx("bodyText")}>Mật khẩu</div>
          <input
            type="text"
            className={cx("loginbox")}
            placeholder="***************"
            value={pass}
            onChange={(e) => setPassWord(e.target.value)}
          />
          <input
            type="button"
            className={cx("buttonlogin")}
            value="Đăng nhập"
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
}

export default Login;

// <div className={cx("form-input")}>
//             <span className={cx("input-group-text")}>Tài khoản :</span>
//             <input type="text" className={cx("loginbox")} />
//           </div>
//           <div className={cx("form-input")}>
//             <span className={cx("input-group-text")}>Mật khẩu :</span>
//             <input type="text" className={cx("loginbox")} />
//           </div>

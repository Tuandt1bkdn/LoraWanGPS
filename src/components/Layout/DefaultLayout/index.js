import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";
import Sidebar from "../components/Sidebar";
import Button from "../components/Button";
//import Header from "../components/Header";
import { useState, createContext } from "react";

export const UserContext = createContext();
console.log(UserContext);

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  const currentUser = true;
  const [userinfo, setUserInfo] = useState("User1");
  console.log("userinfo", userinfo);
  return (
    <UserContext.Provider value={userinfo}>
      <div className={cx("wrapper")}>
        <header className={cx("wrapper1")}>
          <div className={cx("inner")}>
            <span className={cx("location")}>
              <div className={cx("image")} />
            </span>
            <Sidebar />
          </div>
          <div className={cx("action")}>
            <div className={cx("rightHeader")}>
              {currentUser ? (
                <div className={cx("avatar_wrapper")}>
                  <div
                    className={cx("button")}
                    onClick={() => setUserInfo("User1")}>
                    Tài xế 1
                  </div>
                  <div
                    className={cx("button")}
                    onClick={() => setUserInfo("User2")}>
                    Tài xế 2
                  </div>
                  <div
                    className={cx("button")}
                    onClick={() => setUserInfo("User3")}>
                    Tài xế 3
                  </div>
                  <div
                    className={cx("button")}
                    onClick={() => setUserInfo("User4")}>
                    Tài xế 4
                  </div>
                  <div
                    className={cx("button")}
                    onClick={() => setUserInfo("User5")}>
                    Tài xế 5
                  </div>
                </div>
              ) : (
                <>
                  <Button primary>Đăng nhập</Button>
                </>
              )}
            </div>
          </div>
        </header>
        <div className={cx("container")}>
          <div className={cx("content")}>{children}</div>
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default DefaultLayout;

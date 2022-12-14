import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";
import Sidebar from "../components/Sidebar";
import Button from "../components/Button";
//import Header from "../components/Header";
import { useState, createContext } from "react";
import Footer from "../Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export const UserContext = createContext();
console.log(UserContext);

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  const currentUser = true;
  const [userinfo, setUserInfo] = useState(1);
  const [release, setRelease] = useState(false);
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
                release ? (
                  <div>
                    <div className={cx("avatar_wrapper")}>
                      <div
                        className={cx("button")}
                        onClick={() => setUserInfo(1)}>
                        Tài xế 1
                      </div>
                      <div
                        className={cx("button")}
                        onClick={() => setUserInfo(2)}>
                        Tài xế 2
                      </div>
                      <div
                        className={cx("button")}
                        onClick={() => setUserInfo(3)}>
                        Tài xế 3
                      </div>
                      <div
                        className={cx("button")}
                        onClick={() => setUserInfo(4)}>
                        Tài xế 4
                      </div>
                      <div
                        className={cx("button")}
                        onClick={() => setUserInfo(5)}>
                        Tài xế 5
                      </div>
                      <div className={cx("Xicon")}>
                        <FontAwesomeIcon
                          icon={faXmark}
                          onClick={() => setRelease(false)}
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    style={{
                      fontSize: 20,
                      paddingRight: 60,
                      cursor: "pointer",
                    }}>
                    <FontAwesomeIcon
                      icon={faBars}
                      onClick={() => setRelease(true)}
                    />
                  </div>
                )
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
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default DefaultLayout;

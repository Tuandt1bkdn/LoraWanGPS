import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";
import Sidebar from "../components/Sidebar";
import Button from "../components/Button";
import { useState, createContext } from "react";
import Footer from "../Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
//import { useStore } from "/src/store";

export const UserContext = createContext();
console.log("UserContext", UserContext);

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  //const [state, dispatch] = useStore();
  //console.log("state", [state, dispatch]);
  const currentUser = true;
  const [userinfo, setUserInfo] = useState(1);
  const [release, setRelease] = useState(false);
  //console.log("userinfo", userinfo);
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
                      <button
                        onClick={() => setUserInfo(1)}
                        className="border-2 border-gray-100 drop-shadow-2xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        Tài xế 1
                      </button>

                      <button
                        onClick={() => setUserInfo(2)}
                        className="border-2 border-gray-100 drop-shadow-2xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        Tài xế 2
                      </button>
                      <button
                        onClick={() => setUserInfo(3)}
                        className="border-2 border-gray-100 drop-shadow-2xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        Tài xế 3
                      </button>
                      <button
                        onClick={() => setUserInfo(4)}
                        className="border-2 border-gray-100 drop-shadow-2xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        Tài xế 4
                      </button>
                      <button
                        onClick={() => setUserInfo(5)}
                        className="border-2 border-gray-100 drop-shadow-2xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        Tài xế 5
                      </button>
                      <button className={cx("Xicon")}>
                        <FontAwesomeIcon
                          icon={faXmark}
                          className="text-purple-200"
                          onClick={() => setRelease(false)}
                        />
                      </button>
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
                      className="text-purple-200"
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

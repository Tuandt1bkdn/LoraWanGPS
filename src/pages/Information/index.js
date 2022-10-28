import classNames from "classnames/bind";
import styles from "./Infomation.module.scss";
// import { db } from "~/firebase";
// import { uid } from "uid";
// import { useState, useEffect } from "react";
// import { set, ref, onValue } from "firebase/database";
// import { snapshotEqual } from "firebase/firestore";

const cx = classNames.bind(styles);

//const db = StartFireBase();

function Information() {
  //write
  // const [name, setName] = useState("");
  // const handleToChange = (e) => {
  //   setName(e.target.value);
  // };

  // useEffect(() => {
  //   onValue(ref(db), (snapshot) => {
  //     const data = snapshot.val();
  //     if (data !== null) {
  //       Object.values(data).map((name) => {
  //         setName((oldArray) => [...oldArray, name]);
  //       });
  //     }
  //   });
  // }, []);

  // const writeToDatabase = () => {
  //   const uuid = uid();
  //   set(ref(db, `/${uuid}`), {
  //     name,
  //     uuid,
  //   });
  //   setName("");
  // };

  return (
    <div className={cx("info-tab1")}>
      <div className={cx("cl1")}>
        <img
          src="https://photocross.net/wp-content/uploads/2020/03/anh-chan-dung.jpg"
          className={cx("avatar")}
          alt="Nguyen Anh Tuan"
        />
      </div>
      <div className={cx("cl2")}>
        <div className={cx("table1")}>
          <div className={cx("properties")}>
            <div className={cx("info1")}>Họ tên:</div>
            <div className={cx("info1")}>Ngày sinh:</div>
            <div className={cx("info1")}>Giới tính:</div>
          </div>
          <div className={cx("value")}>
            <div className={cx("info2")}>Chưa cập nhật</div>
            <div className={cx("info2")}>Chưa cập nhật</div>
            <div className={cx("info2")}>Chưa cập nhật</div>
          </div>
        </div>
        <div className={cx("table2")}></div>
      </div>

      <div className={cx("cl3")}></div>
    </div>
  );
}

export default Information;

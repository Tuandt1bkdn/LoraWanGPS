// import classNames from "classnames/bind";
// //import Tippy from "@tippyjs/react/headless";
// import styles from "./Header.module.scss";
// import Button from "../Button";
// import { useState } from "react";
// // import { Wrapper as UserMenu } from "../Popper";

// //import Avatar from "../Popper/Avatar";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faBars,
//   faCircleInfo,
//   faClockRotateLeft,
//   faGear,
//   faSignOut,
// } from "@fortawesome/free-solid-svg-icons";
// import Sidebar from "../Sidebar";

// const cx = classNames.bind(styles);

// // const AVATAR_ITEMS = [
// //   {
// //     icon: <FontAwesomeIcon icon={faCircleInfo} />,
// //     title: "Thông tin",
// //     to: "/thong-tin",
// //   },
// //   {
// //     icon: <FontAwesomeIcon icon={faClockRotateLeft} />,
// //     title: "Lịch sử",
// //     to: "/lich-su",
// //   },
// //   {
// //     icon: <FontAwesomeIcon icon={faGear} />,
// //     title: "Điều chỉnh",
// //     to: "/kiem-tra",
// //   },
// //   {
// //     icon: <FontAwesomeIcon icon={faSignOut} />,
// //     title: "Đăng xuất",
// //     to: "/",
// //   },
// // ];

// function Header() {
//   //const [active, setActive] = useState("1");

//   //const [useractive, setUseractive] = useState(useractive)
//   const currentUser = true;
//   return (
//     <header className={cx("wrapper")}>
//       <div className={cx("inner")}>
//         <span className={cx("location")}>
//           <div className={cx("image")} />
//         </span>
//         <Sidebar />
//       </div>
//       <div className={cx("action")}>
//         <div className={cx("rightHeader")}>
//           {currentUser ? (
//             <div className={cx("avatar_wrapper")}>
//               <div
//                 className={cx("button")} /*onClick={() => setUseractive(1) }*/
//               >
//                 User1
//               </div>
//               <div
//                 className={cx("button")} /*onClick={() => setUseractive(1) }*/
//               >
//                 User2
//               </div>
//               <div
//                 className={cx("button")} /*onClick={() => setUseractive(1) }*/
//               >
//                 User3
//               </div>
//               <div
//                 className={cx("button")} /*onClick={() => setUseractive(1) }*/
//               >
//                 User4
//               </div>
//               <div
//                 className={cx("button")} /*onClick={() => setUseractive(1) }*/
//               >
//                 User5
//               </div>
//             </div>
//           ) : (
//             <>
//               <Button primary>Đăng nhập</Button>
//             </>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;

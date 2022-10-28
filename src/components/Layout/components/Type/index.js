import classNames from "classnames/bind";
import styles from "./type.module.scss";

const cx = classNames.bind(styles);

function Type({ login, search }) {
  const classes = cx("wrapper", { login, search });
  return <input type="text" className={classes} placeholder="Nhập nhập nhập" />;
}

export default Type;

import classNames from "classnames/bind";
import config from "src/config";
import styles from "./Sidebar.module.scss";
import Menu, { MenuItem } from "./Menu";

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <aside className={cx("wrapper")}>
      <Menu className={cx("menu")}>
        <MenuItem title="Trang chủ" to={config.routes.home} />
        <MenuItem title="Định vị" to={config.routes.location} />
        <MenuItem title="Chỉ Đường" to={config.routes.searching} />
        <MenuItem title="Thông số" to={config.routes.warning} />
      </Menu>
    </aside>
  );
}

export default Sidebar;

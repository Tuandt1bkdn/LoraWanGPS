import classNames from "classnames/bind";
import config from "src/config";
import styles from "./Sidebar.module.scss";
import Menu, { MenuItem } from "./Menu";
import {
  faHome,
  faLocationDot,
  faMagnifyingGlass,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <aside className={cx("wrapper")}>
      <Menu className={cx("menu")}>
        <MenuItem
          title="Trang chủ"
          to={config.routes.home}
          icon={<FontAwesomeIcon icon={faHome} />}
        />

        <MenuItem
          title="Định vị"
          to={config.routes.location}
          icon={<FontAwesomeIcon icon={faLocationDot} />}
        />

        <MenuItem
          title="Chỉ Đường"
          to={config.routes.searching}
          icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
        />
        <MenuItem
          title="Cảnh báo"
          to={config.routes.warning}
          icon={<FontAwesomeIcon icon={faTriangleExclamation} />}
        />
      </Menu>
    </aside>
  );
}

export default Sidebar;

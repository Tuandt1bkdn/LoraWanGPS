import classNames from "classnames/bind";
import config from "src/config";
import styles from "./Sidebar.module.scss";
import Menu, { MenuItem } from "./Menu";
import {
  faChartBar,
  faHome,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <aside className={cx("wrapper")}>
      <Menu className={cx("menu")}>
        <MenuItem title="TRANG CHỦ" to={config.routes.home} icon={faHome} />
        <MenuItem
          title="ĐỊNH VỊ"
          to={config.routes.location}
          icon={faLocationDot}
        />
        <MenuItem
          title="THÔNG SỐ"
          to={config.routes.warning}
          icon={faChartBar}
        />
      </Menu>
    </aside>
  );
}

export default Sidebar;

//<MenuItem title="Chỉ Đường" to={config.routes.searching} />

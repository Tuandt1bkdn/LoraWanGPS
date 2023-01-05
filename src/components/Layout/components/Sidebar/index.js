//import classNames from 'classnames/bind';
//import config from "src/config";
//import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from "./Menu";
import {
  faChartBar,
  faHome,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

//const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <aside>
      <Menu>
        <MenuItem title="TRANG CHỦ" to="/trangchu" icon={faHome} />
        <MenuItem title="ĐỊNH VỊ" to="/dinhvi" icon={faLocationDot} />
        <MenuItem title="THÔNG SỐ" to="/thongso" icon={faChartBar} />
      </Menu>
    </aside>
  );
}

export default Sidebar;

//<MenuItem title="Chỉ Đường" to={config.routes.searching} />

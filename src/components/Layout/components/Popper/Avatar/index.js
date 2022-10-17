import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import styles from "./Avatar.module.scss";
import AvatarItem from "./AvatarItem";
import { Wrapper as UserMenu } from "../index";

const cx = classNames.bind(styles);

function Avatar({ children, items = [] }) {
  const renderItems = () => {
    return items.map((item, index) => <AvatarItem key={index} data={item} />);
  };
  return (
    <Tippy
      interactive
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx("avatar-item")} tabIndex="-1" {...attrs}>
          <UserMenu>{renderItems()}</UserMenu>
        </div>
      )}>
      {children}
    </Tippy>
  );
}

export default Avatar;

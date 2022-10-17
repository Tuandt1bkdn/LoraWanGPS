import classNames from "classnames/bind";
import styles from "./Avatar.module.scss";
import Button from "~/components/Layout/components/Button";

const cx = classNames.bind(styles);

function AvatarItem({ data }) {
  return (
    <Button className={cx("avatarmenu")} leftIcon={data.icon} to={data.to}>
      {data.title}
    </Button>
  );
}

export default AvatarItem;

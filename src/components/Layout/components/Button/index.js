import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Button({
  to,
  primary,
  checking,
  href,
  children,
  onClick,
  leftIcon,
  rightIcon,
}) {
  let Comp = "button";
  const props = { onClick };

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }
  const classes = cx("wrapper", { primary, checking, leftIcon, rightIcon });
  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx("lefticon")}>{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className={cx("righticon")}>{rightIcon}</span>}
    </Comp>
  );
}

export default Button;

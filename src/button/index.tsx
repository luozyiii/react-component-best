import React from "react";
import classnames from "classnames";

import "./index.css";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactNode;
  type?: "primary" | "dashed" | "link" | "text";
  size?: "small" | "medium" | "large";
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onBlur?: React.FocusEventHandler<HTMLButtonElement>;
}
const Button = (props: ButtonProps) => {
  const {
    className,
    children,
    type,
    size = "medium",
    style,
    onClick,
    onBlur,
    ...other
  } = props;

  const cls = classnames({
    "ant-btn": true,
    [`ant-btn-${type}`]: type,
    [`ant-btn-${size}`]: ["small", "large"].includes(size),
    [className as string]: !!className,
  });

  return (
    <button
      {...other}
      className={cls}
      style={style}
      onClick={onClick}
      onBlur={onBlur}
    >
      {children}
    </button>
  );
};

export default Button;

import React from "react";
import classnames from "classnames";

import "./index.css";

interface ButtonProps {
  className?: string;
  children?: React.ReactNode;
  type?: "primary" | "dashed" | "link" | "text";
  style?: React.CSSProperties;
}
const Button = (props: ButtonProps) => {
  const { className, children, type, style } = props;

  const cls = classnames({
    "ant-btn": true,
    [`ant-btn-${type}`]: type,
    [className as string]: !!className,
  });

  return (
    <button className={cls} style={style}>
      {children}
    </button>
  );
};

export default Button;

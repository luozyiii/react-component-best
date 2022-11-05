import React from "react";
import classnames from "classnames";

import "./index.css";

interface ButtonProps {
  className?: string;
  children?: React.ReactNode;
  type?: "primary" | "ghost" | "dashed" | "link" | "text";
}
const Button = (props: ButtonProps) => {
  const { className, children, type } = props;

  const cls = classnames({
    "ant-btn": true,
    [`ant-btn-${type}`]: type,
    [className as string]: !!className,
  });

  return <button className={cls}>{children}</button>;
};

export default Button;

import React, { useState, useEffect } from "react";
import classnames from "classnames";
import Icon from "../icon";

import "./index.scss";

interface TagProps extends React.HTMLAttributes<HTMLOrSVGElement> {
  className?: string;
  children?: React.ReactNode;
  closable?: boolean;
  color?: string;
  visible?: boolean;
  onClose?: Function;
}

const Tag = (props: TagProps) => {
  const {
    className,
    children,
    closable,
    visible: pvisible,
    color,
    onClose,
    ...other
  } = props;
  const [visible, setVisible] = useState<boolean>(pvisible || true);

  useEffect(() => {
    if ("visible" in props && typeof props.visible !== "undefined") {
      setVisible(props.visible);
    }
  }, [props, props.visible]);

  const customColor = color && color.match(/^#/);

  const cls = classnames({
    "ant-tag": true,
    [`ant-tag-${color}`]: color && !customColor,
    [className as string]: !!className,
  });

  const style: React.CSSProperties = { ...props.style };
  if (customColor) {
    style.backgroundColor = color;
  }

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    onClose?.(e);
    if (e.defaultPrevented) {
      return;
    }
    if (!("visible" in props)) {
      setVisible(false);
    }
  };

  if (!visible) {
    return null;
  }

  return (
    <span {...other} className={cls} style={style}>
      {children}
      {closable && (
        <Icon
          type="close"
          size={16}
          style={{ verticalAlign: "text-top" }}
          onClick={handleClick}
        />
      )}
    </span>
  );
};

export default Tag;

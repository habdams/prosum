import React from "react";
import classNames from "classnames/bind";

import styles from "./Button.module.css";

const c = classNames.bind(styles);

type ButtonProp = {
  children: React.ReactNode;
};

export function Button({ children }: ButtonProp) {
  return <button className={c("button")}>{children}</button>;
}

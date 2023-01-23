import React from "react";
import classNames from "classnames/bind";

import styles from "./Layout.module.css";

const c = classNames.bind(styles);

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return <section className={c("layout")}>{children}</section>;
}

export default Layout;

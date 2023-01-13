import { Circle } from "phosphor-react";
import classNames from "classnames/bind";

import { ProjectStatus } from "../ProjectItem/ProjectItem";

import styles from "./StatusBadge.module.css";

const c = classNames.bind(styles);

type StatusBadgeProp = {
  status: ProjectStatus;
};

export function StatusBadge({ status }: StatusBadgeProp) {
  return (
    <span className={c("badge")}>
      <Circle weight="fill" className={c(status)} />
      <p className={c("status")}>{status}</p>
    </span>
  );
}

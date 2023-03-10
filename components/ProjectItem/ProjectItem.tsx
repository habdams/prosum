import Image from "next/image";
import classNames from "classnames/bind";

import { CopyButton } from "../CopyButton/CopyButton";
import { StatusBadge } from "../StatusBadge/StatusBadge";

import folder from "../../public/icon/folder.svg";
import styles from "./ProjectItem.module.css";

const c = classNames.bind(styles);

export type ProjectStatus = "completed" | "ongoing" | "terminated";

export type ProjectItemProps = {
  id: number;
  name: string;
  begin: number | string | Date;
  deadline: number | string;
  status: ProjectStatus | string;
  link?: string;
};

export function ProjectItem({
  name,
  begin,
  deadline,
  status,
  link,
}: ProjectItemProps) {
  return (
    <section className={c("projectItem")}>
      <section className={c("")}>
        <h3 className={c("title")}>{name}</h3>
        <div className={c("date")}>
          <p>
            {new Date(begin).toLocaleString("en-US", {
              dateStyle: "medium",
            })}
          </p>
          <span> - </span>
          <p>
            {new Date(deadline).toLocaleString("en-US", {
              dateStyle: "medium",
            })}
          </p>
        </div>
      </section>

      <StatusBadge status={status} />
      {link ? <CopyButton link={link} /> : null}

      <Image src={folder} alt="" draggable="false" className={c("icon")} />
    </section>
  );
}

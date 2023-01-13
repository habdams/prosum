import { Plus } from "phosphor-react";
import classNames from "classnames/bind";

import { Button } from "../components/Button/Button";
import { ProjectItem } from "../components/ProjectItem/ProjectItem";

import data from "../data/data.json";

import styles from "../styles/Projects.module.css";

const c = classNames.bind(styles);

export default function Projects() {
  const user3 = data[2];

  function getProjectStatus(status: any) {
    const ProjectStatus = {
      completed: "completed",
      terminated: "terminated",
      default: "ongoing",
    };
  }

  return (
    <section className={c("main")}>
      <section className={c("header")}>
        <h2>Projects</h2>
        <Button>
          <Plus />
          New project
        </Button>
      </section>

      <section className={c("projects")}>
        {user3.projects.map((project) => (
          <ProjectItem
            title={project.name}
            startDate={project.startDate}
            endDate={project.deadline}
            status="ongoing"
            link="www.cpylink.com"
            key={"#" + project.id + project.name}
          />
        ))}
      </section>
    </section>
  );
}

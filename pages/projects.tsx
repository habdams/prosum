import { Plus, XCircle } from "phosphor-react";
import classNames from "classnames/bind";
import * as Dialog from "@radix-ui/react-dialog";

import { Button } from "../components/Button/Button";
import { ProjectItem } from "../components/ProjectItem/ProjectItem";

import data from "../data/data.json";

import styles from "../styles/Projects.module.css";

const c = classNames.bind(styles);

export default function Projects() {
  const user3 = data[2];

  return (
    <section className={c("main")}>
      <section className={c("header")}>
        <h2>Projects</h2>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Button>
              <Plus />
              New project
            </Button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay />
            <Dialog.Content>
              <Dialog.Title asChild>
                <h2>Add new project</h2>
              </Dialog.Title>
              <Dialog.Description asChild>
                <p>we are adding new projects</p>
                <Dialog.Close>
                  <XCircle size={32} />
                </Dialog.Close>
              </Dialog.Description>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </section>

      <section className={c("projects")}>
        {user3.projects.map((project) => (
          <ProjectItem
            title={project.name}
            startDate={project.startDate}
            endDate={project.deadline}
            status={project.status}
            link="www.cpylink.com"
            key={"#" + project.id + project.name}
          />
        ))}
      </section>
    </section>
  );
}

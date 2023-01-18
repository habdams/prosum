import React from "react";
import { Plus, XCircle, Trophy, Rectangle } from "phosphor-react";
import classNames from "classnames/bind";
import * as Dialog from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";

import { Button } from "../components/Button/Button";
import { ProjectItem } from "../components/ProjectItem/ProjectItem";

import data from "../data/data.json";

import styles from "../styles/Projects.module.css";

const c = classNames.bind(styles);

type ProjectFormData = {
  name: string;
  start: string;
  end: string;
};

export default function Projects() {
  const [open, setOpen] = React.useState(false);
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<ProjectFormData>();
  const user3 = data[2];

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <section className={c("main")}>
      <section className={c("header")}>
        <h2>Projects</h2>
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <Button>
              <Plus />
              New project
            </Button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className={c("dailogOverlay")} />
            <Dialog.Content className={c("dialogContent")}>
              <div className={c("dialogHeading")}>
                <div className={"headingIcon"}>
                  <Trophy weight="fill" size={28} />
                </div>
                <div className={c("headingText")}>
                  <Dialog.Title asChild>
                    <h2>Add new project</h2>
                  </Dialog.Title>
                  <Dialog.Description asChild>
                    <p>Tracking work done and share exciting summaries</p>
                  </Dialog.Description>
                </div>
              </div>

              <form className={c("form")} onSubmit={onSubmit}>
                <div className={c("nameG")}>
                  <label htmlFor="name">Name</label>
                  <input {...register("name")} placeholder="Project name" />
                </div>

                <section className={c("dateG")}>
                  <div>
                    <label htmlFor="start">Start</label>
                    <input {...register("start")} placeholder="Start date" />
                  </div>

                  <div>
                    <Rectangle weight="fill" />
                  </div>

                  <div>
                    <label htmlFor="end">End</label>
                    <input {...register("end")} placeholder="End date" />
                  </div>
                </section>

                <div className={c("buttonG")}>
                  <Button onClick={() => setOpen(false)} className="secondary">
                    Cancel
                  </Button>
                  <Button>Add project</Button>
                </div>
              </form>

              <Dialog.Close className={c("dialogClose")}>
                <XCircle size={32} />
              </Dialog.Close>
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

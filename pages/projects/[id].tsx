import React from "react";
import Link from "next/link";
import classNames from "classnames/bind";
import { Plus, XCircle } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";

import Accordion from "../../components/Accordion/Accordion";
import { Button } from "../../components/Button/Button";
import Layout from "../../components/Layout/Layout";

import data from "../../data/data.json";
import styles from "../../styles/Projects.module.css";

const c = classNames.bind(styles);
const user3 = data[2].projects;

type PathProp = {
  params: { id: string };
};

type ProjectProp = {
  project: {
    id: number;
    name: string;
    deadline: string;
    startDate: string;
    status: string;
    description: string;
    tasks: [];
  };
};

export type TaskProp = {
  id: number;
  summary: string;
  body: string;
};

export const getStaticPaths = () => {
  const paths = user3.map((project) => {
    return {
      params: { id: project.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = (context: PathProp) => {
  const id = Number(context.params.id);

  return {
    props: { project: user3[id - 1] },
  };
};

function Details({ project }: ProjectProp) {
  const [open, setOpen] = React.useState(false);
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => console.log(data));
  return (
    <section className={c("details")}>
      <header className={c("projectHeader")}>
        <Link href={"/projects"}> Go back to projects</Link>
        <h1>
          <span className={c("id")}>#{project.id}</span>
          {project.name}
        </h1>

        <p>{project.description}</p>
        <section className={c("projectDates")}>
          <p>
            Start:
            <span className={c("dates")}>
              {new Date(project.startDate).toLocaleString("en-US", {
                dateStyle: "medium",
              })}
            </span>
          </p>

          <p>
            Deadline:
            <span className={c("dates")}>
              {new Date(project.deadline).toLocaleString("en-US", {
                dateStyle: "medium",
              })}
            </span>
          </p>
        </section>
      </header>

      <section className={c("projectTasksWrapper")}>
        <section className={c("projectTasks")}>
          <h2>
            Task <span className="tasksLength">{project.tasks?.length} </span>
          </h2>

          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <Button>
                <Plus />
                New task
              </Button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className={c("dailogOverlay")} />
              <Dialog.Content className={c("dialogContent")}>
                <div className={c("dialogHeading")}>
                  <div className={c("headingText")}>
                    <Dialog.Title asChild>
                      <h2>Add new task</h2>
                    </Dialog.Title>
                    <Dialog.Description asChild>
                      <p>Share insight to what you are doing</p>
                    </Dialog.Description>
                  </div>
                </div>
                <form className={c("form")} onSubmit={onSubmit}>
                  <div className={c("nameG")}>
                    <label htmlFor="name">Main Highlight</label>
                    <input {...register("task")} placeholder="One liner" />
                  </div>

                  <div className={c("insightG")}>
                    <label htmlFor="more">Add more details</label>

                    <textarea
                      {...register("start")}
                      placeholder="Give more insights..."
                    />
                  </div>

                  <div className={c("buttonG")}>
                    <Button
                      onClick={() => setOpen(false)}
                      className="secondary"
                    >
                      Cancel
                    </Button>
                    <Button>Add task</Button>
                  </div>
                </form>
                <Dialog.Close className={c("dialogClose")}>
                  <XCircle size={32} />
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </section>

        <section>
          <Accordion tasks={project.tasks} />
        </section>
      </section>
    </section>
  );
}

export default Details;

Details.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

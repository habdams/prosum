import React from "react";
import Link from "next/link";
import classNames from "classnames/bind";
import axios from "axios";
import { Plus, XCircle } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";

import Accordion, { AccordionProp } from "../../components/Accordion/Accordion";
import { Button } from "../../components/Button/Button";
import Layout from "../../components/Layout/Layout";

import styles from "../../styles/Projects.module.css";

const c = classNames.bind(styles);

type PathProp = {
  params: { id: string };
};

type ProjectPropType = {
  id: number;
  name: string;
  deadline: string;
  begin: string;
  status: string;
  description: string;
  tasks: [];
};

export type ProjectProp = {
  project: [];
};

export const getStaticPaths = async () => {
  const res = await axios.get("https://mockend.com/habdams/prosum/projects");
  const data = await res.data;

  const paths = data.map((project: any) => {
    return {
      params: { id: project.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: PathProp) => {
  const id = context.params.id;
  const task = await axios.get(
    `https://mockend.com/habdams/prosum/tasks?projectId_eq=${id}`
  );
  const project = await axios.get(
    `https://mockend.com/habdams/prosum/project?id_eq=${id}`
  );
  const responses = await Promise.all([task, project]);

  return {
    props: {
      tasks: responses[0].data,
      project: responses[1].data,
    },
    revalidate: 1,
  };
};

function Details({ tasks, project }: any) {
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
        {project.map((data: ProjectPropType, index: number) => (
          <section key={`user-data+${index}`}>
            <h1>
              <span className={c("id")}>#{data?.id}</span>
              {data?.name}
            </h1>

            <p>{data?.description}</p>
            <section className={c("projectDates")}>
              <p>
                Start:
                <span className={c("dates")}>
                  {new Date(data?.begin).toLocaleString("en-US", {
                    dateStyle: "medium",
                  })}
                </span>
              </p>

              <p>
                Deadline:
                <span className={c("dates")}>
                  {new Date(data?.deadline).toLocaleString("en-US", {
                    dateStyle: "medium",
                  })}
                </span>
              </p>
            </section>
          </section>
        ))}
      </header>
      <section className={c("projectTasksWrapper")}>
        <section className={c("projectTasks")}>
          <h2>
            Task <span className="tasksLength">{tasks?.length} </span>
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
          <Accordion tasks={tasks} />
        </section>
      </section>
    </section>
  );
}

export default Details;

Details.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

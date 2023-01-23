import React from "react";
import Link from "next/link";
import classNames from "classnames/bind";
import { Plus } from "phosphor-react";

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
          <Button>
            <Plus />
            New task
          </Button>
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

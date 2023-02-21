import React from "react";
import Link from "next/link";
import classNames from "classnames/bind";
import axios from "axios";
import { useQuery } from "react-query";
import { Plus } from "phosphor-react";

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
  project: ProjectPropType[];
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
  const res = await axios.get(
    `https://mockend.com/habdams/prosum/tasks?projectId_eq${id}`
  );

  const res2 = await axios.get(
    `https://mockend.com/habdams/prosum/projects?id_eq=${id}`
  );

  const project = await res2.data;
  const data = await res.data;

  return {
    props: { tasks: data, project: project },
  };
};

function Details({ tasks, project }: any) {
  // const { data, status } = useQuery("projects", project);

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
          <Button>
            <Plus />
            New task
          </Button>
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

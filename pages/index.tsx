import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames/bind";

import sumImg from "../public/images/sumImg.svg";

import styles from "../styles/Home.module.css";

const c = classNames.bind(styles);

export default function Home() {
  return (
    <>
      <Head>
        <title>Prosum</title>
        <meta name="description" content="Share exciting project summaries" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={c("main")}>
        <div className={c("header")}>
          <h1 className={c("heading")}>Prosum</h1>
          <p className={c("subHeading")}>Share exciting project summaries</p>
        </div>

        <div className="demo">
          <Link href={"/projects"} className={c("demoLink")}>
            Go to demo app
          </Link>
        </div>

        <div className={styles.image}>
          <Image src={sumImg} alt="illustration" />
        </div>

        <div className={styles.projectLoader}>
          <h3>Project status</h3>
          <p className={c("projectPercent")}>10%</p>
        </div>
      </main>
    </>
  );
}

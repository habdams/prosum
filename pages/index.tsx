import Head from "next/head";
import Image from "next/image";
import classNames from "classnames/bind";


import sumImg from "../public/images/sumImg.svg";

import styles from "../styles/Home.module.css";

const c = classNames.bind(styles);
const poppins = Poppins({ weight: "500" });

export default function Home() {
  return (
    <>
      <Head>
        <title>Prosum</title>
        <meta name="description" content="Share exciting project summaries" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.header}>
          <h1 className={clsx(poppins.className, styles.heading)}>Prosum</h1>
          <p className={clsx(barlow.className, styles.subHeading)}>
            Share exciting project summaries
          </p>
        </div>

        <div className={styles.image}>
          <Image src={sumImg} alt="illustration" />
        </div>

        <div className={styles.projectLoader}>
          <h3 className={poppins.className}>Project status</h3>
          <p className={clsx(barlow.className, styles.projectPercent)}>10%</p>
        </div>
      </main>
    </>
  );
}

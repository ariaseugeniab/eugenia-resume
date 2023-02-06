import styled from "@emotion/styled";
import Head from "next/head";
import Home from "../components/Home";
import Profile from "../components/Profile/Profile";
import styles from "../styles/Home.module.css";

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Eugenia Arias Resume</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </div>
  );
}

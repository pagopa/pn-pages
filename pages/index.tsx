import React from "react";
import Head from "next/head";
import Navbar from "@/app/components/Navbar";
import styles from "./index.module.css";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Navbar />
      <div className={styles.flexContainer}>
        <iframe id="idIframe" src="/iframe" className={styles.flexIframe} />
      </div>
      <Footer></Footer>
    </>
  );
}

import Navbar from "@/app/components/Navbar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Navbar></Navbar>

      <iframe src="/iframe" width="100%" height="1440px" />
      
    </>
  );
}

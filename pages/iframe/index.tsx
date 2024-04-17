import Dashboard from "@/app/components/Dashboard";
import Head from "next/head";

export default function Iframe() {
  return (
    <>
      <Head>
        <title>Iframe</title>
      </Head>
      <Dashboard></Dashboard>
      <Dashboard></Dashboard>
    </>
  );
}

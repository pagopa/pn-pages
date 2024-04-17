import Dashboard from "@/app/components/Dashboard";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Iframe() {
  const router = useRouter();
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

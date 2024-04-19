// import React from "react";
// import Head from "next/head";
// import Navbar from "@/app/components/Navbar";
// import styles from "./index.module.css";
// import Footer from "@/app/components/Footer";

// export default function Home() {
//   return (
//     <>
//       <Head>
//         <title>Home</title>
//       </Head>
//       <Navbar />
//       <div className={styles.flexContainer}>
//         <iframe id="idIframe" src="/iframe" className={styles.flexIframe} />
//       </div>
//       <Footer></Footer>
//     </>
//   );
// }


import React, { useLayoutEffect } from "react";
import Head from "next/head";
import Navbar from "@/app/components/Navbar";
import styles from "./index.module.css";
import Footer from "@/app/components/Footer";

export default function Home() {

  const resizeIFrameToFitContent = ( iFrame: HTMLElement ) => {
    // @ts-ignore
    iFrame.height = iFrame.contentDocument.body.scrollHeight;
  }

  useLayoutEffect(() => {
    const iFrame = document.getElementById('idIframe');
    if (iFrame === null) return;
    resizeIFrameToFitContent( iFrame );

      // or, to resize all iframes:
      // const iFrames = document.querySelectorAll("iframe");
      // for( let i = 0; i < iFrames.length; i++) {
      //     resizeIFrameToFitContent( iFrames[i] );
      // }
  }, [])

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Navbar />
      <iframe id="idIframe" src="/iframe" className={styles.flexIframe} />
      <Footer />
    </>
  );
}

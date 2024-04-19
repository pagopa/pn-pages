import React, { useLayoutEffect } from 'react';
import Head from 'next/head';
import Navbar from '@/app/components/Navbar';
import styles from './index.module.css';
import Footer from '@/app/components/Footer';

export default function Home() {
  const resizeIFrameToFitContent = (iFrame: HTMLElement, timeout?: number) => {
    setTimeout(() => {
      // @ts-ignore
      // Resize adding a 16px margin to avoid awkward 1-pixel scrollbars on resize.
      // A better solution would be to have the body inside the iFrame have overflow-y: hidden, but that's out of our control.
      iFrame.height = iFrame.contentDocument.body.scrollHeight + 16;
    }, timeout ?? 0);
  };

  useLayoutEffect(() => {
    const iFrame = document.getElementById('idIframe');
    if (iFrame === null) return;

    window.addEventListener('resize', () => resizeIFrameToFitContent(iFrame));

    resizeIFrameToFitContent(iFrame); // For Chrome-based browsers, since the iFrame's onLoad function doesn't trigger for them

    // or, to resize all iframes:
    // const iFrames = document.querySelectorAll("iframe");
    // for( let i = 0; i < iFrames.length; i++) {
    //     resizeIFrameToFitContent( iFrames[i] );
    // }
  }, []);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Navbar />
      <iframe
        id="idIframe"
        src="/iframe"
        onLoad={(e) => resizeIFrameToFitContent(e.currentTarget, 500)} // Resizing onLoad, added timeout for Firefox
        className={styles.flexIframe}
      />
      <Footer />
    </>
  );
}

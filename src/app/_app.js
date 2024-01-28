// pages/_app.js
import "./globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="//demo.productionready.io/main.css" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

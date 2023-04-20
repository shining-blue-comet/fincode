import "@/styles/globals.css";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script src="https://js.test.fincode.jp/v1/fincode.js" />
      <Component {...pageProps} />
    </>
  );
}

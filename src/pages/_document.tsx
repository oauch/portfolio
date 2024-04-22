import MetaData from "@/components/MetaData";
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <Head />
      <MetaData />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

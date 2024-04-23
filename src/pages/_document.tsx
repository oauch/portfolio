import MetaData from "@/components/Common/MetaData";
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <MetaData />
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

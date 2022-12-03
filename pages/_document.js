import { Html, Head, Main, NextScript } from "next/document";

const Document = () => (
  <Html lang="en">
    <Head>
      <meta name="description" content="Ankankhateseli Portfolio" />
      <meta name="author" content="Ankankhateseli" />
      <meta name="keywords" content="Developer, Portfolio, Ankankhateseli" />

      <meta name="robots" content="index, follow" />
    </Head>
    <body className="bg-[#002b36] overflow-hidden">
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;

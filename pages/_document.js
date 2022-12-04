import { Html, Head, Main, NextScript } from "next/document";

const Document = () => (
  <Html lang="en">
    <Head>
      <meta name="description" content="Ankankhateseli Portfolio" />
      <meta name="author" content="Ankankhateseli" />
      <meta name="keywords" content="Developer, Portfolio, Ankankhateseli" />

      <meta name="robots" content="index, follow" />
    </Head>
    <body className="bg-[#595ead] overflow-hidden">
      <Main />
      <NextScript />
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-2T2ELR8XSM"
      ></script>
      <script>
        window.dataLayer = window.dataLayer || []; function gtag()
        {dataLayer.push(arguments)}
        gtag('js', new Date()); gtag('config', 'G-2T2ELR8XSM');
      </script>
    </body>
  </Html>
);

export default Document;

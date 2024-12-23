import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

const Document = () => (
  <Html lang="en">
    <Head>
      <meta name="description" content="dyooreen Portfolio" />
      <meta name="author" content="dyooreen" />
      <meta name="keywords" content="Developer, Portfolio, dyooreen" />

      <meta name="robots" content="index, follow" />
    </Head>
    <body className="ee-background-color_black">
      <Main />

      <div id="blackSquareUI"></div>
      <NextScript />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
          ga('create', 'G-2T2ELR8XSM', 'auto');
          ga('send', 'pageview');
        `}
      </Script>
      <Script
        src="https://www.google-analytics.com/analytics.js"
        strategy="afterInteractive"
      />
      <Script strategy="afterInteractive"  type="module" src="/_next/static/look.js" />

    </body>
  </Html>
);

export default Document;

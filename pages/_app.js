import "../styles/globals.css";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <div className={"pt-[7.4rem] h-screen grid"}>
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;

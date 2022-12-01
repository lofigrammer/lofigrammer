import "../styles/globals.css";
import Header from "../components/Header";
import DotRing from "../components/DotRing";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <DotRing />

      <Header />
      <div className={"pt-[7.4rem] h-screen grid"}>
        <Component {...pageProps} />
      </div>
      <div
        id="cursor"
        onMouseMove={(e) => console.log(e.clientY - e.target.offsetTop)}
      ></div>
    </div>
  );
}

export default MyApp;

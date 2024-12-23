import "@blacksquareui/look/dist/look.css"
import "../styles/globals.css";
import "../styles/index.css";
import Header from "../components/Header";
import DotRing from "../components/DotRing";
import Link from "next/link";
import MobileMenu from "../components/MobileMenu";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  const menu = [
    { path: "/", name: "Home" },
    { path: "/works", name: "Works" },
  ];
  return (
    <div>
      <DotRing />

      <div className="relative ">
          <Header menu={menu} />
        <div className="laptop:hidden mobile:grid">
          <MobileMenu menu={menu} />
        </div>
        <div className=" grid mobile:mx-6  laptop:w-3/4 laptop:m-auto">
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
}

export default MyApp;

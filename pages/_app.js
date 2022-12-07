import "../styles/globals.css";
import Header from "../components/Header";
import DotRing from "../components/DotRing";
import Link from "next/link";
import MobileMenu from "../components/MobileMenu";

function MyApp({ Component, pageProps }) {
  const menu = [
    { path: "/", name: "Home" },
    { path: "/works", name: "Works" },
  ];
  return (
    <div>
      <DotRing />

      <Header menu={menu} />
      <div
        className={
          "pt-[7.4rem] laptop:h-screen grid mobile:h-[calc(100vh_-_12rem)]"
        }
      >
        <Component {...pageProps} />
      </div>
      <div className="laptop:hidden mobile:block">
        <MobileMenu menu={menu} />
      </div>
    </div>
  );
}

export default MyApp;

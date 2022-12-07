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
      <div className="relative grid overflow-hidden mobile:grid-rows-layout-mobile laptop:grid-rows-layout-laptop">
        <Header menu={menu} />
        <div className="h-full grid mobile:mx-6 border-violet rounded-2xl border-4  laptop:w-3/4 laptop:m-auto">
          <Component {...pageProps} />
        </div>
        <div className="laptop:hidden mobile:grid">
          <MobileMenu menu={menu} />
        </div>
      </div>
    </div>
  );
}

export default MyApp;

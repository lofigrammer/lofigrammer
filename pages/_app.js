import "../styles/globals.css";
import Header from "../components/Header";
import DotRing from "../components/DotRing";
import { useRouter } from "next/router";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const menu = [
    { path: "/", name: "Home" },
    { path: "/works", name: "Works" },
  ];
  return (
    <div>
      <DotRing />

      <Header />
      <div
        className={
          "pt-[7.4rem] laptop:h-screen grid mobile:h-[calc(100vh_-_12rem)]"
        }
      >
        <Component {...pageProps} />
      </div>
      <div className="laptop:hidden mobile:block">
        <div className="p-6 fixed bottom-0 left-0 right-0 z-50  bg-[#595ead]">
          <header className="rounded-lg flex items-center justify-center p-5 h-24 shadow-card bg-[#002b36]">
            <div>
              <ul className="flex">
                {menu.map(({ path, name }, key) => (
                  <li
                    key={key}
                    className={
                      "font-fredoka-one text-white mx-2.5 laptop:text-lg mobile:text-2xl "
                    }
                  >
                    <Link href={path}>{name}</Link>
                    {path === router.asPath && (
                      <div className="rounded-3xl w-2 h-2 bg-violet m-auto border-b-4 border-violet"></div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </header>
        </div>
      </div>
    </div>
  );
}

export default MyApp;

import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const menu = [
    { path: "/", name: "Home" },
    { path: "/works", name: "Works" },
  ];
  return (
    <div className="p-6 fixed top-0 left-0 right-0 z-50  bg-[#595ead]">
      <header className="rounded-lg flex laptop:justify-between mobile:justify-center items-center p-5 h-24 shadow-card bg-[#002b36]">
        <div>
          <h1 className="text-2xl tracking-widest font-fredoka-one text-white uppercase">
            Aram Khachatryan
          </h1>
        </div>
        <div className="laptop:block mobile:hidden">
          <ul className="flex">
            {menu.map(({ path, name }, key) => (
              <li
                key={key}
                className={"font-fredoka-one text-white mx-2.5 text-lg "}
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
  );
};
export default Header;

import Link from "next/link";
import { useRouter } from "next/router";
const MobileMenu = ({ menu }) => {
  const router = useRouter();
  return (
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
  );
};
export default MobileMenu;

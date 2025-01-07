import Link from "next/link";
import { useRouter } from "next/router";

const Header = ({ menu }) => {
  const router = useRouter();

  return (
      <header className="oo-border-color sm__oo-background-color-secondary oo-background-color-primary ee-border-style_solid oo-border-width oo-border-radius flex laptop:justify-between mobile:justify-center items-center oo-padding_2 oo-margin">
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
                  <div className="oo-border-radius oo-background-color-primary  w-4 h-4  m-auto oo-border-width oo-border-color"></div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </header>
  );
};
export default Header;

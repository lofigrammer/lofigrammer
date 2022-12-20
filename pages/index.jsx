import Head from "next/head";
import Image from "next/image";
import Github from "../components/icons/Github";
import Instagram from "../components/icons/Instagram";
import Linkedin from "../components/icons/Linkedin";
import Telegram from "../components/icons/Telegram";
import Twitter from "../components/icons/Twitter";
import * as matter from "gray-matter";
import fs from "fs";

const Home = () => {
  return (
    <>
      <Head>
        <title>dyooreen</title>
      </Head>

      <div className="border-2 border-violet rounded-xl laptop:grid mobile:overflow-auto laptop:items-center laptop:justify-center laptop:grid-cols-[max-content_6rem] mobile:block">
        <div className="laptop:mb-40 laptop:p-6 laptop:pr-4 ">
          <div className="mobile:grid laptop:flex laptop:items-center ">
            <div className="laptop:mr-4 bg-[#002b36] p-6 shadow-card rounded-2xl flex laptop:hover:p-10  mobile:grid mobile:justify-center">
              <div className="relative laptop:w-[200px] laptop:h-[200px] mobile:w-[70vw] mobile:h-[70vw]">
                <Image
                  className="rounded-full"
                  src={"/profile-picture.webp"}
                  objectFit="cover"
                  alt="Avatar"
                  layout="fill"
                />
              </div>
            </div>
            <div className="mobile:mt-8 laptop:mt-0 bg-[#002b36] laptop:p-6 rounded-2xl mobile:h-28 laptop:h-[calc(200px+3rem)]  shadow-card grid items-center hover:p-16">
              <h2 className="font-fredoka-one  text-white text-center text-3xl">
                dyooreen
              </h2>
            </div>
          </div>
          <div className="grid laptop:mt-4 bg-[#002b36] laptop:p-6 rounded-2xl laptop:hover:py-10 shadow-card mobile:mt-8 mobile:p-6">
            <div className="tracking-widest text-white font-fredoka-one text-center mobile:text-lg">
              <p>The Future Is Unpredictable</p>
            </div>
          </div>
        </div>
        <div className="mobile:h-24 mobile:mt-8 laptop:mt-0 laptop:mb-40 laptop:h-[21rem] flex laptop:flex-col justify-between items-center shadow-card bg-[#002b36] p-6 rounded-2xl laptop:hover:px-20">
          <div>
            <a
              href="https://github.com/dyooreen/"
              rel="noreferrer"
              target={"_blank"}
            >
              <Github />
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/dyooreen/"
              rel="noreferrer"
              target={"_blank"}
            >
              <Linkedin />
            </a>
          </div>
          <div>
            <a
              href="https://twitter.com/dyooreen/"
              rel="noreferrer"
              target={"_blank"}
            >
              <Twitter />
            </a>
          </div>
          <div>
            <a href="https://t.me/dyooreen/" rel="noreferrer" target={"_blank"}>
              <Telegram />
            </a>
          </div>
          <div>
            <a
              href="http://instagram.com/dyooreen/"
              rel="noreferrer"
              target={"_blank"}
            >
              <Instagram />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export async function getStaticProps() {
  const projects = [];
  const files = fs.readdirSync("markdowns");

  files.map((file, i) => {
    const content = matter(fs.readFileSync(`markdowns/${file}`, "utf8"));

    projects.push({
      id: i,
      slug: file.replace(".md", ""),
      title: content.data.title,
      link: content.data.link,
      content: content.content,
    });
  });

  return {
    props: {
      projects,
    },
  };
}
export default Home;

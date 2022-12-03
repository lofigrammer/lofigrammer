const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";
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
    <div className="grid items-center justify-center grid-cols-[max-content_6rem]">
      <div className="mb-40 p-6 pr-4 ">
        <div className="flex items-center ">
          <div className="mr-4 bg-violet p-6 shadow-card rounded-2xl flex hover:p-10">
            <Image
              className="rounded-full"
              src={prefix + "/profile-picture.jpg"}
              objectFit="cover"
              alt="Avatar"
              width={200}
              height={200}
            />
          </div>
          <div className="bg-violet p-6 rounded-2xl h-[calc(200px+3rem)]  shadow-card grid items-center hover:p-16">
            <h2 className="font-fredoka-one  text-base3 text-center text-3xl">
              Ankankhateseli
            </h2>
          </div>
        </div>
        <div className="grid mt-4 bg-violet p-6 rounded-2xl hover:py-10 shadow-card">
          <div className="tracking-widest text-base3 font-fredoka-one text-center ">
            <p>The Future Is Unpredictable</p>
          </div>
        </div>
      </div>
      <div className="mb-40 h-[21rem] flex flex-col justify-between items-center shadow-card bg-violet p-6 rounded-2xl hover:px-20">
        <div>
          <a
            href="https://github.com/ankankhateseli/"
            rel="noreferrer"
            target={"_blank"}
          >
            <Github />
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/ankankhateseli/"
            rel="noreferrer"
            target={"_blank"}
          >
            <Linkedin />
          </a>
        </div>
        <div>
          <a
            href="https://twitter.com/ankankhateseli/"
            rel="noreferrer"
            target={"_blank"}
          >
            <Twitter />
          </a>
        </div>
        <div>
          <a
            href="https://t.me/ankankhateseli/"
            rel="noreferrer"
            target={"_blank"}
          >
            <Telegram />
          </a>
        </div>
        <div>
          <a
            href="http://instagram.com/lofigrammer/"
            rel="noreferrer"
            target={"_blank"}
          >
            <Instagram />
          </a>
        </div>
      </div>
    </div>
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
      order: 0 title: content.data.title,
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

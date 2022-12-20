import Head from "next/head";
import React, { useState } from "react";
import Image from "next/image";
import fs from "fs";
import path from "path";
import * as matter from "gray-matter";
import Link from "next/link";

const Works = ({ projects }) => {
  return (
    <>
      <Head>
        <title>dyoorin - Works</title>
      </Head>
      <div className="grid gap-6 border-1 border-violet rounded-2xl overflow-auto h-full">
        {projects.map(
          ({ id, slug, title, link, content, workType, cover, tags }, i) => {
            return (
              <div key={id} className="grid items-start ">
                <div
                  className={
                    "laptop:flex mobile:grid mobile:gap-6 items-center " +
                    (i % 2 == 0 ? "flex-row-reverse" : "")
                  }
                >
                  <div
                    className={
                      "relative -z-10 border-[#002b36] bg-[#002b36] grid items-center border-2 rounded-2xl overflow-hidden laptop:w-2/3 laptop:h-96 mobile:h-56  mobile:w-full "
                    }
                  >
                    {workType === "link" ? (
                      <iframe
                        src={link}
                        className="bg-white"
                        width={200}
                        height={200}
                        frameBorder="0"
                        title={title}
                      ></iframe>
                    ) : (
                      <Image
                        src={"/" + cover}
                        layout="fill"
                        objectFit="contain"
                        alt={title}
                      />
                    )}
                  </div>
                  <div
                    className={
                      "mobile:row-start-1	 mobile:h-auto laptop:h-96 p-6 text-center shadow-card  justify-center  text-5xl font-Roboto tracking-widest w-full bg-[#002b36] rounded-2xl flex items-start text-white laptop:" +
                      (i % 2 == 0 ? "mr-6" : "ml-6")
                    }
                  >
                    <div className="grid w-full">
                      <div className="flex justify-between items-center  border-4 bg-[#002b36] border-violet  rounded-lg">
                        <div className="text-2xl grid h-full w-full pl-4 items-center justify-start bg-[#002b36] rounded-lg">
                          {title}
                        </div>
                        <div className="flex justify-center">
                          <span className="hover:text-white hover:bg-transparent  cursor-pointer bg-[#002b36] text-sm flex  p-4   uppercase">
                            <Link href={link}>See </Link>
                          </span>
                        </div>
                      </div>
                      <div className="mobile:mb-0 p-8  laptop:h-[15.7rem] mobile:h-auto border-violet border-4 rounded-lg my-6 overflow-auto">
                        <p className="text-left text-base tracking-normal whitespace-pre-line">
                          <span className="flex">
                            {tags.split(",").map((i, j) => (
                              <span
                                key={j}
                                className="mr-2 border-2 p-2 rounded-md"
                              >
                                {" "}
                                {i}{" "}
                              </span>
                            ))}
                          </span>
                          {content}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </>
  );
};

export async function getStaticProps() {
  let projects = [];
  const MDS_PATHS = path.join("markdowns");
  const files = fs.readdirSync(MDS_PATHS);

  files.map((file, i) => {
    const content = matter(fs.readFileSync(`${MDS_PATHS}/${file}`, "utf8"));

    projects.push({
      id: i,
      slug: file.replace(".md", ""),
      title: content.data.title,
      order: content.data.order,
      link: content.data.link,
      content: content.content,
      workType: content.data.workType,
      cover: content.data.cover,
      tags: content.data.tags,
    });
  });
  projects = projects.sort((a, b) => a.order - b.order);
  return {
    props: {
      projects,
    },
  };
}

export default Works;

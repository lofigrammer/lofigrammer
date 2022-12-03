const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";
import React, { useState } from "react";
import Image from "next/image";
import fs from "fs";
import path from "path";
import * as matter from "gray-matter";
import Link from "next/link";

const Works = ({ projects }) => {
  return (
    <div className="grid  overflow-hidden items-center justify-center mobile:w-[calc(100vw_-_2.5rem)] laptop:w-9/12 m-auto h-[calc(100vh_-_11rem)]">
      <div className="grid border-4 border-[#002b36] rounded-xl overflow-auto h-full ">
        {projects.map(
          ({ id, slug, title, link, content, workType, cover, tags }, i) => {
            return (
              <div key={id} className="mt-6  grid items-start ">
                <div
                  className={
                    "laptop:flex mobile:grid mobile:gap-8 items-center " +
                    (i % 2 == 0 ? "flex-row-reverse" : "")
                  }
                >
                  <div
                    className={
                      "relative -z-10 border-violet border-2 rounded-2xl overflow-hidden laptop:w-2/3 h-96  mobile:w-full "
                    }
                  >
                    {workType === "link" ? (
                      <iframe
                        src={link}
                        className="bg-white"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                      ></iframe>
                    ) : (
                      <Image
                        src={prefix + "/" + cover}
                        layout="fill"
                        objectFit="contain"
                        alt={title}
                      />
                    )}
                  </div>
                  <div
                    className={
                      "mobile:row-start-1	 mobile:h-auto laptop:h-96 p-6 text-center shadow-card  justify-center  text-5xl font-Roboto tracking-widest w-full bg-violet rounded-2xl flex items-start text-base3 laptop:" +
                      (i % 2 == 0 ? "mr-6" : "ml-6")
                    }
                  >
                    <div className="grid w-full">
                      <div className="flex justify-between items-center  border-4 bg-[#002b36] border-[#002b36]  rounded-lg">
                        <div className="text-2xl grid h-full w-full pl-4 items-center justify-start bg-violet rounded-lg">
                          {title}
                        </div>
                        <div className="flex justify-center">
                          <span className="hover:text-base3 hover:bg-transparent  cursor-pointer bg-[#002b36] text-sm flex  p-4   uppercase">
                            <Link href={link}>See </Link>
                          </span>
                        </div>
                      </div>
                      <div className="mobile:mb-0 p-8  laptop:h-[15.7rem] mobile:h-[22.8rem] border-[#002b36] border-4 rounded-lg my-6 overflow-auto">
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
    </div>
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

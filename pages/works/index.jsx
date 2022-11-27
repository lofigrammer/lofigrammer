const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";
import React, { useState } from "react";
import Image from "next/image";
import fs from "fs";
import path from "path";
import * as matter from "gray-matter";
import Link from "next/link";

const Works = ({ projects }) => {
  return (
    <div className="grid  overflow-hidden items-center justify-center w-9/12 m-auto h-[calc(100vh_-_11rem)]">
      <div className="grid border-4 border-[#002b36] rounded-xl overflow-auto h-full ">
        {projects.map(({ id, slug, title, link, content }, i) => {
          return (
            <div key={id} className="mt-6  grid items-start ">
              <div
                className={
                  " flex items-center " + (i % 2 == 0 ? "flex-row-reverse" : "")
                }
              >
                <div
                  className={
                    "relative -z-10 border-apricot border-2 rounded-2xl overflow-hidden w-2/3 h-96 "
                  }
                >
                  <Image
                    src={prefix + "/" + slug + ".gif"}
                    layout="fill"
                    objectFit="cover"
                    alt={title}
                  />
                </div>
                <div
                  className={
                    "h-96 p-6 text-center shadow-card  justify-center  text-5xl font-Roboto tracking-widest w-full bg-apricot rounded-2xl flex items-start text-white " +
                    (i % 2 == 0 ? "mr-6" : "ml-6")
                  }
                >
                  <div className="grid ">
                    <div className="flex justify-between items-center  border-4 bg-[#002b36] border-[#002b36]  rounded-lg">
                      <div className="text-2xl grid h-full w-full pl-4 items-center justify-start bg-apricot rounded-lg">
                        {title}
                      </div>
                      <div className="flex justify-center">
                        <span className="hover:text-white hover:bg-transparent  cursor-pointer bg-[#002b36] text-sm flex  p-4   uppercase">
                          <Link href={link}>See </Link>
                        </span>
                      </div>
                    </div>
                    <div className="p-8 h-[16.3rem] border-[#002b36] border-4 rounded-lg my-6 overflow-auto">
                      <p className="text-base tracking-normal">{content}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const projects = [];
  const MDS_PATHS = path.join("markdowns");
  const files = fs.readdirSync(MDS_PATHS);

  files.map((file, i) => {
    const content = matter(fs.readFileSync(`${MDS_PATHS}/${file}`, "utf8"));

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

export default Works;

import Head from "next/head";
import React, { useState } from "react";
import Image from "next/image";
import fs from "fs";
import path from "path";
import * as matter from "gray-matter";
import Link from "next/link";
import Delayed from "../../components/Delayed";
import Github from "../../components/icons/Github";
const Works = ({ projects }) => {
  console.log(projects)
  return (
    <>
      <Head>
        <title>dyooreen - Works</title>
      </Head>
      <div className="grid gap-6  ">
        {projects.map(
          ({ id, isPublic, title, link, content, workType, cover, tags }, i) => {
            return (
              <div key={id} className="grid items-start ">
                <div
                  className={
                    "laptop:flex mobile:grid items-center " +
                    (i % 2 == 0 ? "flex-row-reverse" : "")
                  }
                >
                  <div
                    className={
                      "relative oo-background-color-primary oo-border-color oo-border-width ee-border-style_solid grid items-center oo-border-radius laptop:w-2/3 laptop:h-96 mobile:h-56  mobile:w-full " + (i % 2 == 0 ? " oo-margin-left " : " oo-margin-right ")
                    }
                  >
                    {workType === "link" ? (
                      <Delayed waitBeforeShow={1000}>

                        <iframe
                          src={link}
                          className="bg-white oo-border-radius"
                          width={"100%"}
                          height={"100%"}
                          frameBorder="0"
                          title={title}
                        ></iframe>
                      </Delayed>
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
                      "mobile:row-start-1 oo-background-color-primary	 mobile:h-auto p-6 text-center  justify-center  text-5xl font-Roboto tracking-widest w-full oo-border-color oo-border-width ee-border-style_solid oo-border-radius flex items-start text-white laptop:" +
                      (i % 2 == 0 ? "mr-6" : "ml-6")
                    }
                  >
                    <div className="grid w-full">
                      <div
                        className="flex justify-between items-center ee-background-color_black  oo-border-color oo-border-width ee-border-style_solid oo-border-radius">
                        <div
                          className="text-2xl grid h-full w-full oo-padding items-center justify-start ">
                          {title}
                        </div>
                        <div className="flex justify-center">

                          {isPublic === 1 ?
                            <span
                              className="hover:text-white hover:bg-transparent  cursor-pointer text-sm flex  p-4   uppercase">
                              <a href={"https://github.com/dyooreen/" + link.split("/")[3]} rel="noreferrer" target="_blank">
                                <Github />
                              </a>
                            </span>
                            : null}
                          <span
                            className="hover:text-white hover:bg-transparent  cursor-pointer text-sm flex  p-4   uppercase items-center">
                            <a href={link} rel="noreferrer" target="_blank">See </a>
                          </span>
                        </div>
                      </div>
                      <div
                        className="mobile:mb-0 oo-padding  ee-background-color_black laptop:h-[15.7rem] mobile:h-auto oo-border-color oo-border-width ee-border-style_solid oo-border-radius my-6 overflow-auto">
                        <p className="text-left text-base tracking-normal whitespace-pre-line">
                          <span className="flex">
                            {tags.split(",").map((i, j) => (
                              <span
                                key={j}
                                className="mr-2 oo-border p-2 oo-border-radius ee-border-style_solid oo-border-color oo-border-width"
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
  const MDS_PATHS = path.join("markdowns");
  const files = fs.readdirSync(MDS_PATHS);

  const projects = files.map((file, i) => {
    const content = matter(fs.readFileSync(`${MDS_PATHS}/${file}`, "utf8"));
    return {
      id: i,
      slug: file.replace(".md", ""),
      title: content.data.title,
      order: content.data.order,
      link: content.data.link,
      content: content.content,
      workType: content.data.workType,
      cover: content.data.cover,
      tags: content.data.tags,
      isPublic: content.data.isPublic
    };
  })
    .sort((a, b) => a.order - b.order)

  return {
    props: {
      projects,
    },
  };
}

export default Works;

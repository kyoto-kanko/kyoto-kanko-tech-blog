import Image from "next/image";
import React from "react";
import ArticleDescription from "./ArticleDescription";
import { ArticleTitles } from "../types/ArticleTitles";
import client from "../lib/apiClient";

async function getBlogs(title: ArticleTitles) {
  const queries = title === "新着記事" ? { limit: 5 } : {};
  const data = await client.get({
    endpoint: "blogs",
    queries,
  });
  return data.contents;
}

const formatDate = (date: string): string => {
  const utcDate: Date = new Date(date);
  const jstDate = new Date(utcDate.getTime() + 9 * 60 * 60 * 1000);
  const year = jstDate.getUTCFullYear();
  const month = ("0" + (jstDate.getUTCMonth() + 1)).slice(-2);
  const day = ("0" + jstDate.getUTCDate()).slice(-2);
  const hours = ("0" + jstDate.getUTCHours()).slice(-2);
  const minutes = ("0" + jstDate.getUTCMinutes()).slice(-2);
  const formattedString = `${year}-${month}-${day}T${hours}:${minutes}`;
  return formattedString;
};

interface Blog {
  id: string;
  title: string;
  eyecatch: {
    url: string;
  };
  tag: string[];
  createdAt: string;
}

export default async function InitialBlogList(articleDescription: {
  title: ArticleTitles;
}) {
  const blogs = await getBlogs(articleDescription.title);
  return (
    <>
      <ArticleDescription title={articleDescription.title} />
      <div className="flex items-center flex-col m-4">
        {blogs.map((blog: Blog) => (
          <a
            key={blog.id}
            href={`tech/${blog.id}`}
            className="my-2 bg-white border shadow hover:bg-gray-100 relative flex flex-col sm:flex-row w-full sm:w-3/4"
          >
            <Image
              className="p-2 rounded-xl w-full h-auto  sm:w-80 sm:h-48"
              src={blog.eyecatch.url}
              alt="blog image"
              width={500}
              height={500}
            />
            <div className="p-4 sm:p-8 flex flex-col justify-between">
              <div>
                <p className="text-2xl font-bold">{blog.title}</p>
                <p className="flex mt-2 flex-wrap">
                  {blog.tag.map((tag) => (
                    <span
                      key={tag}
                      className="border-2 border-blue-400 mr-2 mb-2 text-xs text-blue-400 px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </p>
              </div>
              <p className="mt-4 sm:mt-0">
                投稿日: {formatDate(blog.createdAt)}
              </p>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}

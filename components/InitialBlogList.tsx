import { createClient } from "microcms-js-sdk";
import Image from "next/image";
import React from "react";
import ArticleDescription from "./ArticleDescription";
import { Input } from "@/components/ui/input";
import { ArticleTitles } from "../types/ArticleTitles";

const microCmsClient = createClient({
  serviceDomain: "il685n1911",
  apiKey: "BOe3OF4nQZ2kPoGFebS4GvAr0t7ewnvDXALm",
});

async function getBlogs(title: ArticleTitles) {
  const queries = title === "新着記事一覧" ? { limit: 3 } : {};
  const data = await microCmsClient.get({
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
      {articleDescription.title !== "新着記事一覧" && (
        <Input
          className="flex mx-auto w-1/2 mb-14"
          type="text"
          placeholder="キーワードを入力して検索"
        />
      )}
      <div className="flex items-center flex-col">
        {blogs.map((blog: Blog) => (
          <a
            key={blog.id}
            href={`tech/${blog.id}`}
            className="my-2 flex w-3/4 bg-white border shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 relative"
          >
            <Image
              className="p-2 rounded-xl w-80 h-48"
              src={blog.eyecatch.url}
              alt="blog image"
              width={300}
              height={200}
            />
            <div className="p-8">
              <p className="text-2xl font-bold">{blog.title}</p>
              <p className="flex mt-2">
                {blog.tag.map((tag) => (
                  <span
                    key={tag}
                    className="border-2 border-blue-400 mr-2 text-xs text-blue-400 px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </p>
              <p className="absolute bottom-4">
                投稿日: {formatDate(blog.createdAt)}
              </p>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}

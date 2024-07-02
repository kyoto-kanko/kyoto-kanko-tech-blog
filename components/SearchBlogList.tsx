"use client";
import Image from "next/image";
import React, { useState } from "react";
import ArticleDescription from "./ArticleDescription";
import { Input } from "./ui/input";
import { createClient } from "microcms-js-sdk";
import { Loader2 } from "lucide-react";

export default function SearchBlogList() {
  const [blogs, setBlogs] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    event.preventDefault();
    const client = createClient({
      serviceDomain: "il685n1911",
      apiKey: "BOe3OF4nQZ2kPoGFebS4GvAr0t7ewnvDXALm",
    });

    try {
      const data = await client.get({
        endpoint: "blogs",
        queries: {
          q: keyword,
        },
      });
      setBlogs(data.contents);
    } finally {
      setIsLoading(false);
    }
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

  return (
    <>
      <ArticleDescription title={"記事検索"} />
      <form onSubmit={handleSearch}>
        <Input
          className="flex mx-auto w-3/4 lg:w-1/2"
          type="text"
          placeholder="キーワードを入力して検索"
          onChange={(e) => setKeyword(e.target.value)}
        />
      </form>
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

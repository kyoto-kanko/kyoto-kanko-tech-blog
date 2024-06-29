"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { createClient } from "microcms-js-sdk";
import Image from "next/image";

function fetchArticles({ initialBlogs }) {
  const [keyword, setKeyword] = useState("");
  const [blogs, setBlogs] = useState(initialBlogs);
  const [isSearch, setIsSearch] = useState(false);

  const handleSerch = async (event) => {
    event.preventDefault();
    setIsSearch(true);

    const client = createClient({
      serviceDomain: "il685n1911",
      apiKey: "BOe3OF4nQZ2kPoGFebS4GvAr0t7ewnvDXALm",
    });

    const data = await client.get({
      endpoint: "blogs",
      queries: {
        q: keyword,
      },
    });
    setBlogs(data.contents);
  };
  return (
    <div>
      <form onSubmit={handleSerch}>
        <Input
          type="text"
          placeholder="Search"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </form>
      <div className="flex items-center flex-col">
        {(isSearch ? blogs : initialBlogs).map((blog: any) => (
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
                {blog.tag.map((ta) => (
                  <span
                    key={ta}
                    className="border-2 border-blue-400 mr-2 text-xs text-blue-400 px-2 py-1"
                  >
                    {ta}
                  </span>
                ))}
              </p>
              <p className="absolute bottom-4">投稿日: {blog.createdAt}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default fetchArticles;

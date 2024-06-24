import { createClient } from "microcms-js-sdk";
import React from "react";
import ArticleDescription from "../../components/ArticleDescription";
import Image from "next/image";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const client = createClient({
  serviceDomain: "il685n1911",
  apiKey: "BOe3OF4nQZ2kPoGFebS4GvAr0t7ewnvDXALm",
});

async function fetchBlogs() {
  const data = await client.get({
    endpoint: "blogs",
  });
  return data.contents;
}

export default async function Page() {
  const blogs = await fetchBlogs();

  return (
    <div>
      <ArticleDescription title="技術記事一覧" />
      <div className="flex items-center flex-col">
        {blogs.map((blog: any) => (
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
                {blogs.map((item) => (
                  <span
                    key={item.id}
                    className="border-2 border-blue-400 mr-2 text-xs text-blue-400 px-2 py-1"
                  >
                    {item.id}
                  </span>
                ))}
              </p>
              <p className="absolute bottom-4">投稿日: {blog.createdAt}</p>
            </div>
          </a>
        ))}
      </div>
      <div className="m-8">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}

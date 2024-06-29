import React from "react";
import { createClient } from "microcms-js-sdk";

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

async function BlogList({ children }) {
  const blogs = await fetchBlogs();
  return <div>{children({ initialBlogs: blogs })}</div>;
}

export default BlogList;

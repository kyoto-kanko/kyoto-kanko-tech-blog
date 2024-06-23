import React from "react";
import { createClient } from "microcms-js-sdk";
import parse from "html-react-parser";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const client = createClient({
  serviceDomain: "",
  apiKey: "",
});

async function fetchBlogs(id: string) {
  const data = await client.get({
    endpoint: `blogs/${id}`,
  });
  return data;
}

const taskEdit = async ({ params }: { params: { id: string } }) => {
  const blogs = await fetchBlogs(params.id);
  return (
    <div>
      <ReactMarkdown remarkPlugins={[remarkGfm]} className="markdown">
        {blogs.content}
      </ReactMarkdown>
    </div>
  );
};

export default taskEdit;

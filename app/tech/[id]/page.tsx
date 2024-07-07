import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import client from "../../../lib/apiClient";

async function fetchBlogs(id: string) {
  const data = await client.get({
    endpoint: `blogs/${id}`,
  });
  return data;
}

const taskEdit = async ({ params }: { params: { id: string } }) => {
  const blogs = await fetchBlogs(params.id);
  return (
    <div className="m-8">
      <ReactMarkdown remarkPlugins={[remarkGfm]} className="markdown">
        {blogs.content}
      </ReactMarkdown>
    </div>
  );
};

export default taskEdit;

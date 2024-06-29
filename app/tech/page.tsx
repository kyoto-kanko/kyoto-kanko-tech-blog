import React from "react";
import ArticleDescription from "../../components/ArticleDescription";
import BlogList from "../../components/BlogList";
import FetchArticles from "../../components/FetchArticles";

function Page() {
  return (
    <>
      <BlogList>
        {({ initialBlogs }) => (
          <div>
            <ArticleDescription title="技術記事一覧" />
            <FetchArticles initialBlogs={initialBlogs} />
          </div>
        )}
      </BlogList>
    </>
  );
}

export default Page;

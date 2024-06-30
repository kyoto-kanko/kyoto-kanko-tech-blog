import React from "react";
import InitialBlogList from "../../components/InitialBlogList";
import SearchBlogList from "../../components/SearchBlogList";

function Page() {
  return (
    <>
      <SearchBlogList />
      <InitialBlogList title="技術記事一覧" />
    </>
  );
}

export default Page;

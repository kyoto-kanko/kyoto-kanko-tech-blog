import React from "react";

function ArticleDescription(ArticleDescriptionProps: { title: string }) {
  return (
    <div className="flex flex-row flex-nowrap items-center mt-24 text-xl mb-14">
      <span className="flex-grow block border-t border-black"></span>
      <span className="flex-none block mx-4 px-4 py-2.5 text-xl rounded leading-none font-medium bg-black text-white">
        {ArticleDescriptionProps.title}
      </span>
      <span className="flex-grow block border-t border-black"></span>
    </div>
  );
}

export default ArticleDescription;

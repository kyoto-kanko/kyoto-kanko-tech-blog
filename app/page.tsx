import Terminals from "../components/Terminals";
import ArticleDescription from "../components/ArticleDescription";
import BlogList from "../components/BlogList";
import FetchArticles from "../components/FetchArticles";

function Home() {
  return (
    <div>
      <Terminals />
      <BlogList>
        {({ initialBlogs }) => (
          <div>
            <ArticleDescription title="技術記事一覧" />
            <FetchArticles initialBlogs={initialBlogs} />
          </div>
        )}
      </BlogList>
    </div>
  );
}

export default Home;

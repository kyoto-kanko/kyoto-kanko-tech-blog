import Terminals from "../components/Terminals";
import ArticleDescription from "../components/ArticleDescription";

function Home() {
  return (
    <div>
      <Terminals />
      <div>
        <ArticleDescription title="技術記事一覧" />
      </div>
    </div>
  );
}

export default Home;

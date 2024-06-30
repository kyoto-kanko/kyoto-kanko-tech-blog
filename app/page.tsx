import Terminals from "../components/Terminals";
import InitialBlogList from "../components/InitialBlogList";

function Home() {
  return (
    <div>
      <Terminals />
      <div>
        <InitialBlogList title="新着記事一覧" />
      </div>
    </div>
  );
}

export default Home;

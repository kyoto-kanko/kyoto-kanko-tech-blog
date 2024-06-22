import { Terminal } from "lucide-react";
import Image from "next/image";
import Terminals from "../components/Terminals";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Terminals />
      <h2 className="flex flex-row flex-nowrap items-center mt-24">
        <span className="flex-grow block border-t border-black"></span>
        <span className="flex-none block mx-4 px-4 py-2.5 text-xl rounded leading-none font-medium bg-black text-white">
          新着の記事一覧
        </span>
        <span className="flex-grow block border-t border-black"></span>
      </h2>
      <div className="flex flex-wrap justify-center">
        {articles.map((article) => (
          <div key={article.title} className="shadow-lg m-4 w-1/4">
            <Image
              src="https://blog-imgs-43-origin.fc2.com/v/o/c/vocawallpaper/2012090808035339cs.jpg"
              alt="Sunset in the mountains"
              width={500}
              height={500}
            />
            <div className="p-4">
              <div className="font-bold text-xl">{article.title}</div>
            </div>
            <div className="px-6 pb-2">
              {article.tag.map((tag) => (
                <span
                  key={tag}
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const articles: { title: string; href: string; src: string; tag: string[] }[] =
  [
    {
      title: "猫と京都と酒",
      href: "猫と京都と酒の記事一覧",
      src: "https://blog-imgs-43-origin.fc2.com/v/o/c/vocawallpaper/2012090808035339cs.jpg",
      tag: ["backend", "frontend", "devops"],
    },
    {
      title: "Rubyでコンテナを作成してみたあああああああ",
      href: "技術記事の記事一覧",
      src: "https://blog-imgs-43-origin.fc2.com/v/o/c/vocawallpaper/2012090808035339cs.jpg",
      tag: ["backend", "frontend", "devops"],
    },
    {
      title: "アルコール駆動開発のすゝめ",
      href: "アルコール駆動開発のすゝめの記事一覧",
      src: "https://blog-imgs-43-origin.fc2.com/v/o/c/vocawallpaper/2012090808035339cs.jpg",
      tag: ["backend", "frontend", "devops"],
    },
    {
      title: "問い合わせ",
      href: "問い合わせの記事一覧",
      src: "https://blog-imgs-43-origin.fc2.com/v/o/c/vocawallpaper/2012090808035339cs.jpg",
      tag: ["backend", "frontend", "devops"],
    },
    {
      title: "問い合わせ",
      href: "問い合わせの記事一覧",
      src: "https://blog-imgs-43-origin.fc2.com/v/o/c/vocawallpaper/2012090808035339cs.jpg",
      tag: ["backend", "frontend", "devops"],
    },
    {
      title: "問い合わせ",
      href: "問い合わせの記事一覧",
      src: "https://blog-imgs-43-origin.fc2.com/v/o/c/vocawallpaper/2012090808035339cs.jpg",
      tag: ["backend", "frontend", "devops"],
    },
    {
      title: "問い合わせ",
      href: "問い合わせの記事一覧",
      src: "https://blog-imgs-43-origin.fc2.com/v/o/c/vocawallpaper/2012090808035339cs.jpg",
      tag: ["backend", "frontend", "devops"],
    },
    {
      title: "問い合わせ",
      href: "問い合わせの記事一覧",
      src: "https://blog-imgs-43-origin.fc2.com/v/o/c/vocawallpaper/2012090808035339cs.jpg",
      tag: ["backend", "frontend", "devops"],
    },
    {
      title: "問い合わせ",
      href: "問い合わせの記事一覧",
      src: "https://blog-imgs-43-origin.fc2.com/v/o/c/vocawallpaper/2012090808035339cs.jpg",
      tag: ["backend", "frontend", "devops"],
    },
  ];

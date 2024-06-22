import React from "react";

function Header() {
  return (
    <header className="h-16 fixed top-0 left-0 right-0 flex items-center justify-around bg-white shadow-md">
      <div>猫と京都と酒</div>
      <div className="flex justify-around w-1/3">
        <a href="/tech">技術記事</a>
        <a href="/alcohol">アルコール駆動開発のすゝめ</a>
        <a href="/contact">問い合わせ</a>
      </div>
    </header>
  );
}

export default Header;

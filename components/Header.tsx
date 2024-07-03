import Image from "next/image";
import { GrNotes } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import React from "react";

function Header() {
  return (
    <header className="h-16 fixed top-0 left-0 right-0 flex items-center justify-around bg-white shadow-md z-10">
      <a href="/">
        <Image
          src="/logo/logo.png"
          alt="logo"
          className="w-36 h-12 "
          width={500}
          height={500}
        />
      </a>
      <div className="flex justify-around w-1/3">
        <a href="/tech" className="flex items-center">
          <GrNotes />
          <span className="hidden sm:block"> 技術記事</span>
        </a>

        <a href="https://github.com/kyoto-kanko" className="flex items-center">
          <FaGithub />
          <span className="hidden sm:block">Github</span>
        </a>
        <a href="https://x.com/kyoto_kanko_jp" className="flex items-center">
          <FaXTwitter />
          <span className="hidden sm:block">X</span>
        </a>
      </div>
    </header>
  );
}

export default Header;

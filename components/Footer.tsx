import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="/">
            <Image
              src="/logo/logo.png"
              alt="logo"
              className="w-36 h-12 "
              width={500}
              height={500}
            />
          </a>
        </div>
        <hr className="my-6 border-gray-200" />
        <span className="block text-sm text-gray-500 text-center">
          © 2024 kyoto-kanko All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;

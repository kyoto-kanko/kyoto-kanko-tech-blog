import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
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
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024 kyoto-kanko All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;

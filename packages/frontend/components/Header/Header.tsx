import { Logo, Nav } from "components";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-100 p-6 shadow-md">
      <Link href="/">
        <a>
          <div className="flex items-center flex-no-shrink text-white mr-6">
            <Logo />
            <span className="font-semibold text-3xl text-transparent bg-clip-text animate-gradient-x bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 tracking-tight">
              Scrappy
            </span>
          </div>
        </a>
      </Link>
      <Nav />
    </nav>
  );
};

export default Header;

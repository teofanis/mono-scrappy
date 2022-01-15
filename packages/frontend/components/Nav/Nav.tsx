import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
      <div className=" block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow text-right">
          <Link  href="/">
            <a className="block mt-4 lg:inline-block lg:mt-0 font-bold text-lg mr-4 transition ease-in-out duration-500 transform hover:-translate-y-0.5
            text-pink-600 hover:text-transparent hover:bg-clip-text hover:animate-gradient-y hover:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500
            ">
                Home
          </a>
          </Link>

        </div>
      </div>

  );
};

export default Nav;

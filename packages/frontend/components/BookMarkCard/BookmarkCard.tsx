import { Bookmark } from "interfaces";
import React from "react";

interface BookmarkCardProps {
  loading: boolean;
  bookmark?: Bookmark;
}

const BookmarkCard = ({ loading, bookmark}: BookmarkCardProps) => {
  return loading ? (
    <div className="p-4 w-full">
      <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
        <div className="p-6">
          <h2 className="bg-gray-400 animate-pulse h-4 w-1/4 mb-2" />
          <h1 className="w-1/2 mb-4 h-6 animate-pulse bg-gray-500" />
          <p className="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-400" />
          <p className="leading-relaxed mb-3 w-2/3 h-3 animate-pulse bg-gray-400" />
          <p className="leading-relaxed mb-3 w-1/2 h-3 animate-pulse bg-gray-400" />
          <div className="flex items-center flex-wrap ">
            <a className="bg-indigo-300 h-4 animate-pulse mt-2 w-32 inline-flex items-center md:mb-2 lg:mb-0"></a>
            <span className="bg-pink-300 w-16 mt-2 h-4 animate-pulse mr-3 px-2 inline-flex items-center ml-auto leading-none text-sm pr-5 py-1"></span>
            <a className="bg-red-300 h-4 animate-pulse mt-2 w-32 inline-flex items-center md:mb-2 lg:mb-0"></a>
            <span className="bg-green-300 w-16 mt-2 h-4 animate-pulse mr-3 px-2 inline-flex items-center ml-auto leading-none text-sm pr-5 py-1"></span>
          </div>
        </div>
      </div>
    </div>
  ) : !bookmark ? (<></>)
  :(
    <div className="p-4 w-full">
      <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
            {bookmark.title}
          </h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
           {bookmark.description}
          </h1>
          <p className="leading-relaxed mb-3">
            {bookmark.description}
          </p>
          <div className="flex items-center flex-wrap ">
            <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
              Learn More
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </a>
            <span className="text-gray-600 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-300">
              <svg
                className="w-4 h-4 mr-1"
                stroke="currentColor"
                strokeWidth={2}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx={12} cy={12} r={3} />
              </svg>
              1.2K
            </span>
            <span className="text-gray-600 inline-flex items-center leading-none text-sm">
              <svg
                className="w-4 h-4 mr-1"
                stroke="currentColor"
                strokeWidth={2}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
              </svg>
              6
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookmarkCard;

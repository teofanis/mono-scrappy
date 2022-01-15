import { Badge } from "components";
import { Bookmark } from "interfaces";
import moment from "moment";
import Link from "next/link";
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
            {`Added on ${moment(bookmark.created_at).format("MMMM Do YYYY HH:mm")}`}
          </h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
           {bookmark.description}
          </h1>
          <p className="leading-relaxed mb-3">
            {bookmark.description}
          </p>
          <div className="flex items-center flex-wrap justify-between">
            <Link href={bookmark.url} >
            <a target="_blank" className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
              Open Bookmark
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
            </Link>
            <div className="flex space-x-2">
            {bookmark?.tags?.map((tag, index) => (
                <React.Fragment key={`${bookmark.id}-${index}-${tag.name}`}>
                    <Badge text={`${tag.name}`}/>
                </React.Fragment>
            ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookmarkCard;

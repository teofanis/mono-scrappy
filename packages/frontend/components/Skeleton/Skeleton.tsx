import { BookmarkCard } from "components";
import React from "react";

const Skeleton = () => {
  return (
    <section className="text-gray-700 body-font">
      <div className="px-5 py-6 w-full">
          <h2 className="bg-gray-400 animate-pulse h-4 w-1/4 mb-2" />
          <h1 className="w-1/2 mb-4 h-6 animate-pulse bg-gray-500" />
        </div>
      <div className="container px-5 py-24 mx-auto">

        <div className="flex flex-wrap -m-4">
          {Array(10)
            .fill(true)
            .map((item, index) => (
              <React.Fragment key={index}>
                <BookmarkCard loading={item} />
              </React.Fragment>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Skeleton;

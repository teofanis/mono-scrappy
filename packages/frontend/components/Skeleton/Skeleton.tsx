import {BookmarkCard} from "components";
import React from "react";

const Skeleton = () => {
  return (
    <section className="text-gray-700 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
            {Array(10).fill(true).map((item, index) => <React.Fragment key={index}><BookmarkCard loading={item}/></React.Fragment>)}
        </div>
      </div>
    </section>
  );
};

export default Skeleton;

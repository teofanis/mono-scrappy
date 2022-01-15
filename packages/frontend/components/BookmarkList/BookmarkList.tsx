import { BookmarkCard } from "components";
import React from "react";
import { Bookmark } from "../../interfaces";

interface BookmarkListProps {
  bookmarks: Bookmark[];
}

const BookmarkList = ({ bookmarks }: BookmarkListProps) => {
    console.log(bookmarks);
  return (
    <section className="text-gray-700 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {bookmarks &&
            bookmarks?.map((bookmark) => (
              <React.Fragment key={bookmark.id}>
                <BookmarkCard loading={false} bookmark={bookmark} />
              </React.Fragment>
            ))}
        </div>
      </div>
    </section>
  );
};

export default BookmarkList;

import { BookmarkCard, Dropdown } from "components";
import React from "react";
import { Bookmark, Tag } from "../../interfaces";
interface BookmarkListProps {
  tags: Tag[];
  bookmarks: Bookmark[];
  activeTagFilters: string[];
  setTagFilters: (filters: string[]) => void;
}

const BookmarkList = ({ bookmarks, tags, activeTagFilters, setTagFilters }: BookmarkListProps) => {
  const tagFilterOptions = tags.map((tag: Tag) => ({ value: tag.name, label: tag.name }));
  const handleTagFilterChange = (selected: any) => {
    setTagFilters(selected.flat()?.map((option: { value: string, label: string}) => option.value) || []);
  };
  console.log(bookmarks);
  return (
    <section className="text-gray-700 body-font">
      <div className="container px-5 w-1/3 py-6">
        <Dropdown
          options={tagFilterOptions}
          noOptionsMessage={() => "No Tags Found"}
          isMulti={true}
          placeholder={`Filter By Tag`}
          id={"tag-filter"}
          label={"Filter By Tag"}
          value={activeTagFilters.map((tag:string) => ({ value: tag, label: tag }))}
          onChange={handleTagFilterChange}
        />
      </div>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {bookmarks &&
            bookmarks.map((bookmark) => (
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

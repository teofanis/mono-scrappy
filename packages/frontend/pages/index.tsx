import BookmarkList from "components/BookmarkList/BookmarkList";
import { Bookmark, Tag } from "interfaces";
import axios from "libs/axios";
import type { NextPage } from "next";
import { useState } from "react";
import useSWR from "swr";
import { Layout, Skeleton } from "../components";

const fetcher = (url: string) => {
  return axios.get(url).then((res) => res.data);
};

const bookmarkFetcher = (url: string, filters: string[]) => {
  const filterString = filters.length > 0 ? `?tags=${filters.join(",")}` : "";
  const fullURL = `${url}${filterString}`.trim();
  return axios.get(fullURL).then((res) => res.data);
};

const Home: NextPage = () => {
  const [activeTagFilters, setTagFilters] = useState<string[]>([]);
  const { data: tags } = useSWR<{ data: Tag[] }>("/api/tags", fetcher);
  const { data: bookmarks, error } = useSWR<{ data: Bookmark[] }>(
    ["/api/bookmark", activeTagFilters],
    bookmarkFetcher
  );
  const filteredBookmarks = bookmarks?.data || [];
  const applyFilter = (filters: string[]) => {
    setTagFilters(filters);
  };
  return (
    <Layout>
      <div className="py-10">
        {error && (
          <div className="text-xl text-center font-semibold text-red-500">
            An error occurred
          </div>
        )}
        {!error && !bookmarks && <Skeleton />}
        {!error && bookmarks && (
          <BookmarkList
            tags={tags?.data || []}
            activeTagFilters={activeTagFilters}
            setTagFilters={applyFilter}
            bookmarks={filteredBookmarks}
          />
        )}
      </div>
    </Layout>
  );
};

export default Home;

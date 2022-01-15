import BookmarkList from 'components/BookmarkList/BookmarkList';
import { Bookmark } from 'interfaces';
import axios from 'libs/axios';
import type { GetStaticProps, NextPage } from 'next'
import useSWR from 'swr';
import {Layout, Skeleton} from '../components';


const fetcher = (url:string) => axios.get(url).then(res => res.data);

const Home: NextPage = () => {
  const { data: bookmarks, error } = useSWR<{data: Bookmark[]}>('/api/bookmark', fetcher);
  return (
    <Layout>
      <div className="py-10">
        {error && <div className="text-xl text-center font-semibold text-red-500"> An error occurred</div>}
        {!error && !bookmarks && <Skeleton />}
        {!error && bookmarks && <BookmarkList bookmarks={bookmarks.data} />}
      </div>
    </Layout>
  )
}



export default Home

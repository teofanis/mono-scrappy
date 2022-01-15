import axios from 'libs/axios';
import type { GetStaticProps, NextPage } from 'next'
import { useEffect } from 'react';
import {Layout} from '../components';

const Home: NextPage = () => {

  useEffect(() => {
    const t = axios.get('/api/bookmark').then(res => res.data);
    console.log(t);
  }, []);
  return (
    <Layout>

      <p>Hi</p>

    </Layout>
  )
}



export default Home

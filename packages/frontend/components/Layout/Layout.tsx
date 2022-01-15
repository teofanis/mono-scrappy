import Head from 'next/head'
import React, { ReactChild, ReactChildren, ReactNode } from 'react'
import {Header} from '..';

interface LayoutProps {
    children: ReactChild | ReactChildren | ReactNode
}

const Layout: React.FC<LayoutProps>  = ({ children }: LayoutProps) => {
    return (
        <>
        <Head>
          <title>Scrappy</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <div className="container mx-auto">
        {children}
        </div>
      </>
    )
}

export default Layout

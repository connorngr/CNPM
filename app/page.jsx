'use client';
import Feed from 'components/Feed';
import Head from 'next/head';
import { useSession } from 'next-auth/react';
const Home = () => {
    const {data: session} = useSession();
    return (
        <>
        <Head>
                <title>Index Page</title>
            </Head>
        <section className="w-full flex-center flex-col">
            
            <h1 className="head_text text-center">Discover Projects
            <br />
            <span className="blue_gradient text-center">You might interested in</span>
            </h1>
            {!session ? <p className="desc text-center">
                Sign in now to see projects.
            </p> : <p className="desc text-center">
                See all projects below.
            </p>}
            
            {/* feed will be built later */}
            <Feed/>
        </section>
        </>
    )
}

export default Home
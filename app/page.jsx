'use client';
import Feed from 'components/Feed';
import Head from 'next/head';
import { useSession } from 'next-auth/react';
const Home = () => {
    const {data: session} = useSession();
    return (
        <>
        <Head>
                
            </Head>
        <section className="w-full flex-center flex-col">
            
            <h1 className="head_text text-center">Khám phá các 
            <br />
            <span className="blue_gradient text-center">Dự án quyên góp</span>
            </h1>
            {!session ? <p className="desc text-center">
                Đăng nhập để bắt đầu.
            </p> : <p className="desc text-center">
                Xem các dự án bên dưới.
            </p>}
            
            {/* feed will be built later */}
            <Feed/>
        </section>
        </>
    )
}

export default Home
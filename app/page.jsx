import Feed from 'components/Feed';
import Head from 'next/head';
const Home = () => {
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
            <p className="desc text-center">
                What the heck is going on.
            </p>
            {/* feed will be built later */}
            <Feed/>
        </section>
        </>
    )
}

export default Home
import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Carousel from '../components/carousel'

export default function Home() {
    return (
        <>
            <Head>
                <title>StarSeek - Space Exploration</title>
                <meta name="description" content="space exploration" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <div class="mt-20 mb-10">
                <center>
                    <h1 class="text-4xl font-bold">Explore the Solar System</h1> <br></br>
                    <img src="https://earthhow.com/wp-content/uploads/2018/08/Solar-System-Infographic.png"></img>
                </center>
            </div>

            <Carousel />

            <Footer />

        </>
    )
}

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

            <div class="mt-20 mb-10 m-24">
                <center>
                    <div className="bg-purple-500 p-6 rounded-lg shadow-lg text-white">
                        <h2 className="text-2xl font-semibold mb-2">Todays Horoscope</h2>
                        <p className="text-lg">Gemini (May 21 - June 20)</p>
                        <p className="text-sm mt-2"></p>
                    </div>
                    <br></br>
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                        <div className="bg-blue-500 p-4 rounded-lg text-white">
                            <h3 className="text-xl font-semibold">Aries</h3>
                            <p className="text-sm">March 21 - April 19</p>
                        </div>
                        <div className="bg-red-500 p-4 rounded-lg text-white">
                            <h3 className="text-xl font-semibold">Taurus</h3>
                            <p className="text-sm">April 20 - May 20</p>
                        </div>
                        <div className="bg-green-500 p-4 rounded-lg text-white">
                            <h3 className="text-xl font-semibold">Gemini</h3>
                            <p className="text-sm">May 21 - June 20</p>
                        </div>
                        <div className="bg-yellow-500 p-4 rounded-lg text-white">
                            <h3 className="text-xl font-semibold">Cancer</h3>
                            <p className="text-sm">June 21 - July 22</p>
                        </div>
                    </div>
                    <br></br>
                    <div className="bg-purple-500 p-6 rounded-lg shadow-lg text-white">
                        <h2 className="text-2xl font-semibold mb-2">Did You Know?</h2>
                        <p className="text-sm">In astrology, the twelve signs of the zodiac are associated with different personality traits and characteristics.</p>
                    </div>
                    <br></br>
                    <div className="bg-blue-500 p-6 rounded-lg shadow-lg text-white">
                        <h2 className="text-2xl font-semibold mb-2">Planet Jupiter</h2>
                        <p className="text-sm">Jupiter is the largest planet in our solar system and is known for its massive size and strong magnetic field.</p>
                    </div>
                    <br></br>

                    <div className="bg-yellow-500 p-6 rounded-lg shadow-lg text-white">
                        <h2 className="text-2xl font-semibold mb-2">Learn More About Astrology</h2>
                        <ul className="list-disc list-inside text-sm">
                            <li><a href="/astrology-basics" className="text-blue-200 hover:underline">Astrology Basics</a></li>
                            <li><a href="/zodiac-signs" className="text-blue-200 hover:underline">Zodiac Signs</a></li>
                            <li><a href="/horoscope-reading" className="text-blue-200 hover:underline">Horoscope Reading</a></li>
                        </ul>
                    </div>

                </center>
            </div>

            <Footer />

        </>
    )
}

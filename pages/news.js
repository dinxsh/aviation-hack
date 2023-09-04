import Link from 'next/link';
import axios from 'axios';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function Home({ value }) {

    var bgBackground = {
        backgroundImage: `url(${"https://images.unsplash.com/photo-1505506874110-6a7a69069a08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"})`,
        'background-size': 'cover',
    };

    return (
        <div style={bgBackground}>
            <Navbar />
            <div className="bg-bc min-h-screen">
                <div className="flex justify-center">
                    <h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-10 md:text-4xl">
                        Space News
                    </h2>
                </div>
                <div className="flex justify-center items-center flex-col">
                    {value.map(news => {
                        return (
                            <div key={1}>
                                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    <div class="p-5">
                                        <a href="#">
                                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{news.name}</h5>
                                        </a>
                                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{news.description}</p>
                                        <a href={news.url} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            Read more
                                            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                            </svg>
                                        </a>
                                    </div>
                                </div><br></br>
                            </div>
                        );
                    })}
                </div>
            </div>
            <Footer />
        </div>
    );
}
export async function getServerSideProps() {
    const res = await axios.get('https://aviation-hack.vercel.app/api/news');
    const { data: value } = res;
    if (!value) {
        return {
            notFound: true
        };
    }
    return {
        props: {
            value
        }
    };
}
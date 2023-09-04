import React from 'react';
import Navbar from "../components/navbar";
import Footer from "../components/footer"

function MoonPage() {
    return (
        <>
            <Navbar />

            <div className="text-white p-10 m-10">
                <header className="text-center mb-6">
                    <h1 className="text-4xl font-bold">Explore the Moon</h1>
                </header>

                <section className="max-w-2xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-4">Moon Phases</h2>
                    <p className="text-lg">
                        The moon goes through several phases, including New Moon, First Quarter, Full Moon, and Last Quarter. Each
                        phase has its unique appearance and significance.
                    </p>
                </section>

                <section className="max-w-2xl mx-auto p-6 mt-6 bg-gray-800 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-4">Lunar Exploration</h2>
                    <p className="text-lg">
                        Humans have been fascinated by the moon for centuries. Learn about famous moon missions like Apollo 11 and the
                        history of lunar exploration.
                    </p>
                </section>

                <section className="max-w-2xl mx-auto p-6 mt-6 bg-gray-800 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-4">Fun Moon Facts</h2>
                    <ul className="list-disc pl-4">
                        <li className="text-lg">The moon is approximately 1/6th the size of Earth.</li>
                        <li className="text-lg">It takes about 27.3 days for the moon to orbit Earth.</li>
                        <li className="text-lg">The moon has no atmosphere, so there's no weather.</li>
                    </ul>
                </section>
            </div>

            <Footer />
        </>
    );
}

export default MoonPage;

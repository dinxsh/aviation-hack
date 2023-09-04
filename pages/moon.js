import React, { useEffect, useState } from 'react';
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import axios from 'axios';

function MoonWidget() {
    const [moonPhase, setMoonPhase] = useState('');
    const [nextFullMoon, setNextFullMoon] = useState('');
    const [moonData, setMoonData] = useState(null);

    useEffect(() => {
        const apiKey = '84424ff562ef43a4a1c237d8a8986845';
        axios
            .get(`https://api.ipgeolocation.io/astronomy?apiKey=${apiKey}`)
            .then((response) => {
                setMoonData(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error('Error fetching moon data:', error);
            });

        const fetchData = async () => {
            const currentDate = new Date();
            const dayOfMonth = currentDate.getDate();
            const currentMonth = currentDate.getMonth() + 1;
            const currentYear = currentDate.getFullYear();
            const firstDayTimestamp = new Date(currentYear, currentMonth - 1, 1).getTime() / 1000;
            const url = `https://www.icalendar37.net/lunar/api/?lang=en&month=${currentMonth}&year=${currentYear}&size=100&lightColor=rgb(245,245,245)&shadeColor=rgb(17,17,17)&LDZ=${firstDayTimestamp}`;

            try {
                const response = await fetch(url);
                if (response.status === 200) {
                    const data = await response.json();
                    setMoonPhase(data.phase[dayOfMonth].svg);
                    setNextFullMoon(data.nextFullMoon);
                }
            } catch (error) {
                console.error('Error fetching moon data:', error);
            }
        };

        fetchData();
    }, []);

    var bgBackground = {
        backgroundImage: `url(${"https://images.unsplash.com/photo-1447433589675-4aaa569f3e05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80"})`
    };

    return (
        <div style={bgBackground}>
            <Navbar />

            <div className="text-white p-10 m-10">
                <header className="text-center mb-6">
                    <h1 className="text-4xl font-bold">Explore the Moon</h1>
                </header>

                <section className="max-w-2xl mx-auto p-6 mt-6 bg-gray-800 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-4">Moon Data Today</h2>

                    <div id="contain_moon" class="inline-block m-14" style={{ textAlign: 'center', paddingTop: '5px', paddingBottom: '5px' }}>
                        <div style={{ marginTop: '-7px', marginBottom: '-15px', padding: '30px', filter: 'drop-shadow(0 0 30px hsl(220,100%,15%))', height: '100px' }}>
                            <div dangerouslySetInnerHTML={{ __html: moonPhase }} />
                            <br /><p>moon image today</p>
                        </div>

                    </div>

                    <div className="text-lg inline-block">
                        {moonData ? (
                            <div>
                                <p>{moonData.location.city} {moonData.location.country_code3} - {moonData.location.latitude}° {moonData.location.longitude}°</p>
                                <p>altitude: {moonData.moon_altitude}</p>
                                <p>distance: {moonData.moon_distance}</p>
                                <p>parallactic angle: {moonData.moon_parallactic_angle}</p>
                                <p>moonrise: {moonData.moonrise}</p>
                                <p>moonset: {moonData.moonset} AM</p>
                                <p>solar_noon: {moonData.moon_altitude} PM</p>
                            </div>
                        ) : (
                            <p>Loading moon data...</p>
                        )}
                    </div>
                </section><br />

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
        </div>
    );
}

export default MoonWidget;

// MoonData.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MoonData() {
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
    }, []);

    return (
        <div>
            <h2>Moon Data</h2>
            {moonData ? (
                <div>
                    <p>date: {moonData.current_time}</p>
                    <p>Next Full Moon: {moonData.location.city} {moonData.location.latitude} {moonData.location.longitude}</p>
                    <p>moon altitude: {moonData.moon_altitude}</p>
                    <p>moon country_code2: {moonData.location.country_code3}</p>
                    <p>moon distance: {moonData.distance}</p>
                    <p>moon parallactic angle: {moonData.moon_parallactic_angle}</p>
                    <p>moon moonrise: {moonData.moonrise}</p>
                    <p>moon moonset: {moonData.moonset}</p>
                    <p>moon solar_noon: {moonData.moon_altitude}</p>
                </div>
            ) : (
                <p>Loading moon data...</p>
            )}
        </div>
    );
}

export default MoonData;

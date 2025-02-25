import React from 'react';

interface TemperatureFrameProps {
    image: string;
    temperature: number;
    city: string;
    condition: string;
}

export default function TemperatureFrame({ image, temperature, city, condition }: TemperatureFrameProps) {
    return (
        <div className="temperature-frame">
            <img src={image} alt="weather" />
            <div className="temperature">
                <h2>{temperature}°C</h2>
                <p>{city}</p>
                <p>{condition}</p>
            </div>
        </div>
    );
}
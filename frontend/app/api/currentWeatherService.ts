import { getGeocode, searchCityGeoLocation } from "./geocodeService"

const API_KEY = process.env.API_KEY;

interface CurrentWeatherResponse {
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
    },
    weather: {
        main: string;
        description: string;
    }[]
}

export async function getCurrentWeather(city: string): Promise<CurrentWeatherResponse> {
    const { lat, lon } = await searchCityGeoLocation(city)
    
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
        
        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }
        const {main, weather} = await response.json()
        return {main, weather};

    } catch (error) {
        console.error('Error fetching current weather data:', error);
        throw error;
    }
}
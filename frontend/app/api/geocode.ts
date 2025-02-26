import axios from 'axios';

const API_KEY = process.env.API_KEY;

export const getGeocode = async (cityName: string) => {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${API_KEY}`;
    
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching geocode data:', error);
        throw error;
    }
};
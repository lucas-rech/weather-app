const API_KEY = process.env.API_KEY;

interface GeocodeResponse {
    name: string;
    lat: number;
    lon: number;
    country: string;
    state?: string;
}

export const getGeocode = async (cityName: string): Promise<GeocodeResponse[]> => {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(cityName)}&appid=${API_KEY}`;
    
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching geocode data:', error);
        throw error;
    }
};
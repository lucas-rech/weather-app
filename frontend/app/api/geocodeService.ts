const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

interface GeocodeResponse {
    name: string;
    lat: number;
    lon: number;
    country: string;
    state?: string;
}

 const getGeocode = async (cityName: string): Promise<GeocodeResponse[]> => {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(cityName)}&appid=${API_KEY}`;
    
    try {
        const response = await fetch(url);
        console.log(response)

        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching geocode data:', error);
        throw error;
    }
};

const searchCityGeoLocation = async (city: string) => {
    const data = await getGeocode(city)
    const { lat, lon } = data[0]

    return { lat, lon }
};

export default searchCityGeoLocation;
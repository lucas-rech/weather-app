import searchCityGeoLocation from "./geocodeService"

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

interface CurrentWeatherResponse {
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
    };
    definition: {
        main: string;
        description: string;
    };
}

export async function getCurrentWeather(city: string): Promise<CurrentWeatherResponse> {
    const { lat, lon } = await searchCityGeoLocation(city)
    
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
        
        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }
        
        //desestruturando respostas
        const { main, weather } = await response.json();
        const { temp, feels_like, temp_min, temp_max, pressure, humidity } = main;
        const { main: weatherMain, description } = weather[0];

        //Arredondando valores
        const roundedTemp = Math.round(temp);
        const roundedFeelsLike = Math.round(feels_like);
        const roundedTempMin = Math.round(temp_min);
        const roundedTempMax = Math.round(temp_max);

        //criando objetos somente com propriedades que serão utilizadas
        const mainObj = { temp: roundedTemp, feels_like: roundedFeelsLike, temp_min: roundedTempMin, temp_max: roundedTempMax, pressure, humidity };
        const weatherObj = { main: weatherMain, description };

        return { main: mainObj, definition: weatherObj };

    } catch (error) {
        console.error("Erro ao buscar dados: ", error);
        throw error;
    }
}

import { getCurrentWeather } from "../api/currentWeatherService";
import searchCityGeoLocation from "../api/geocodeService";


export type CityData = {
    cityName: string;
    lat: number;
    lon: number;
    weather: {
        main: string;
        description: string;
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
    };
}

//Essa função é responsável por buscar a cidade e o clima atual
//Ela recebe um termo de busca(no momento de um form) e retorna um objeto com os dados da cidade e do clima
export const handleSearch = async (searchTerm: string): Promise<CityData | undefined> => {
    if (searchTerm === "") {
        console.log("Nenhum termo digitado");
        alert("Digite uma cidade!");
        return;
    }

    const cityLatLong = await searchCityGeoLocation(searchTerm);
    const { lat, lon } = cityLatLong;

    const weatherData = await getCurrentWeather(searchTerm);

    const cityData: CityData = {
        cityName: searchTerm,
        lat,
        lon,
        weather: {
            main: weatherData.definition.main,
            description: weatherData.definition.description,
            temp: weatherData.main.temp,
            feels_like: weatherData.main.feels_like,
            temp_min: weatherData.main.temp_min,
            temp_max: weatherData.main.temp_max,
            pressure: weatherData.main.pressure,
            humidity: weatherData.main.humidity,
        }
    }

    console.log(cityData);

    return cityData;
}

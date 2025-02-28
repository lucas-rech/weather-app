import { getCurrentWeather } from "../api/currentWeatherService";
import searchCityGeoLocation from "../api/geocodeService";


//Essa função é responsável por buscar a cidade e o clima atual
//Ela recebe um termo de busca(no momento de um form) e retorna um objeto com os dados da cidade e do clima
export const handleSearch = async (searchTerm: string) => {
    if (searchTerm === "") {
        console.log("Nenhum termo digitado");
        alert("Digite uma cidade!");
        return;
    }

    
    const cityLatLong = await searchCityGeoLocation(searchTerm);
    const {lat, lon} = cityLatLong;

    const weatherData = await getCurrentWeather(searchTerm);
    
    const cityData = {
        cityName: searchTerm,
        lat: lat,
        lon: lon,
        weather: weatherData
    }
        
    console.log(cityData);

    return cityData;
}

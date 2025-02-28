"use client";
import React from "react";
import { CityData, handleSearch } from "../util/searchHandler";
import SearchBar from "./searchBar";

type WeatherImage = {
    image: string;
    alt: string;
};

const displayWeatherImage = (data: CityData) => {
    const images: WeatherImage[] = [
        {image: "assets/sunny.png", alt: "dia ensolarado"},
        {image: "assets/cloud.png", alt: "dia nublado"},
    ]

    //checa se a propriedade do objetdo data.weather.main é igual a "x"
    const weather = data.weather.main;
    switch (weather) {
        case "Clouds":
            return images[1];
        case "Clear":
            return images[0];
        default:
            return images[0];
    }
}

//TODO: Implementar a lógica de renderização do card
//TODO: Inserir outras imagens de climas
export default function WeatherCard() {
    const [image, setImage] = React.useState<WeatherImage>({image: "", alt: ""});

    const search = async (searchTerm: string) => {
        const data = await handleSearch(searchTerm);
        if (data !== undefined) {
            setImage(displayWeatherImage(data));
        }
    }

    return (
        <div className="
            bg-white 
            bg-opacity-60
            w-[300] h-3/5
            md:w-[350] md:h-4/5
            lg:w-[450] lg:h-4/5  
            rounded-xl"
        >
            <SearchBar placeholder="Digite uma cidade" onSubmit={search}/>
            {image.image && <img src={image.image} alt={image.alt}></img>}       

            {/* Inserir temperature frame*/}
            {/* <TemperatureData /> */}

        </div>
        
    )
};
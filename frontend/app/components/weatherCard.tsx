import SearchBar from "./searchBar";

type WeatherImage = {
    image: string;
    alt: string;
};

//TODO: Implementar a lógica de renderização do card
//TODO: Inserir outras imagens de climas
export default async function WeatherCard() {
    const images: WeatherImage[] = [
            {image: "sunny.png", alt: "sunny day"},
    ]

    return (
        <div className="
            bg-white 
            bg-opacity-60
            w-[300] h-3/5
            md:w-[350] md:h-4/5
            lg:w-[450] lg:h-4/5  
            rounded-xl"
        >
            <SearchBar />            

            {/* teste */}
            {/* <img src={images[0].image} alt={images[0].alt}></img> */}

            {/* Inserir temperature frame*/}
            {/* <TemperatureData /> */}

        </div>
        
    )
};
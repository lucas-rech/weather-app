import SearchBar from "./searchBar";

export default function Card() {
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
        </div>
    )
}
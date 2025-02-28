interface SearchBarProps {
    placeholder: string;
    onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}

//TODO: Quebrar em micro-componentes
export default function SearchBar({placeholder, onSubmit}: SearchBarProps) {
    return (
        <div className="flex justify-center align-center w-full mt-6">
            
            <form onSubmit={onSubmit} className="flex flex-row justify-between items-center gap-2 h-[35px] w-[100%] mr-8 ml-8">
                <input type="text" placeholder={placeholder} className="bg-white bg-opacity-70  rounded-xl pl-4 w-[60%] h-full"/>
                <button type="submit" className="bg-[#390e44] text-white w-[30%] h-full rounded-xl hover:w-[32%] hover:h-[38px] hover:bg-[#58006e]">Buscar</button>
            </form>
        </div>
    )
}
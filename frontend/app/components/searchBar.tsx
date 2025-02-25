export default function SearchBar() {
    return (
        <div className="flex justify-center align-center w-full mt-6">
            
            <form action="#" className="flex flex-row justify-between gap-2 h-[35px] w-[100%] mr-8 ml-8">
                <input type="text" placeholder="Digite uma cidade" className="bg-white bg-opacity-70  rounded-xl pl-4 w-[60%]"/>
                <button type="submit" className="bg-[#390e44] text-white w-[30%] rounded-xl hover:w-[32%] hover:h-[3px] hover:bg-[#58006e]">Buscar</button>
            </form>
        </div>
    )
}
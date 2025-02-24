export default function SearchBar() {
    return (
        <div className="mt-6 flex justify-center align-center w-full">
            <form action="#" className="flex flex-row justify-between gap-2 h-[35px] w-[100%] mr-8 ml-8">
                <input type="text" placeholder="Digite uma cidade" className="bg-white bg-opacity-70  rounded-xl pl-4 w-[60%]"/>
                <button type="submit" className="bg-[rgb(88,0,110)] text-white w-[30%] rounded-xl">Buscar</button>
            </form>
        </div>
    )
}
//TODO: Quebrar em micro-componentes
//TODO: Tornar o componente searchBar reutilizável usando props e criando uma propriedade-função para o botão de busca

interface SearchBarProps {
    placeholderProp: string;
}

export default function SearchBar({placeholderProp}: SearchBarProps) {
    return (
        <div className="flex justify-center align-center w-full mt-6">
            
            <form action="#" className="flex flex-row justify-between items-center gap-2 h-[35px] w-[100%] mr-8 ml-8">
                <input type="text" placeholder={placeholderProp} className="bg-white bg-opacity-70  rounded-xl pl-4 w-[60%] h-full"/>
                <button type="submit" className="bg-[#390e44] text-white w-[30%] h-full rounded-xl hover:w-[32%] hover:h-[38px] hover:bg-[#58006e]">Buscar</button>
            </form>
        </div>
    )
}
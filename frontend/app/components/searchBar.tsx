"use client";
import React from "react";

interface SearchBarProps {
    placeholder: string;
    onSubmit?: (searchTerm: string) => void;
}

//TODO: Quebrar em micro-componentes
export default function SearchBar({placeholder, onSubmit}: SearchBarProps) {
    const [input, setInput] = React.useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.currentTarget.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (onSubmit) {
            onSubmit(input);
        }
    }

    return (
        <div className="flex justify-center align-center w-full mt-6">
            
            <form onSubmit={handleSubmit} className="flex flex-row justify-between items-center gap-2 h-[35px] w-[100%] mr-8 ml-8">
                <input 
                type="text" 
                placeholder={placeholder}
                value={input}
                onChange={handleChange} 
                className="bg-white bg-opacity-70  rounded-xl pl-4 w-[60%] h-full"/>
                <button type="submit" className="bg-[#390e44] text-white w-[30%] h-full rounded-xl hover:w-[32%] hover:h-[38px] hover:bg-[#58006e]">Buscar</button>
            </form>
        </div>
    )
}
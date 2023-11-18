import { ReactNode } from "react";

interface IMenuProps {
    children: ReactNode;
    cardsSize: number;
}

export const Menu = ({children, cardsSize}: IMenuProps) => {
    return (
        <div className="relative w-full max-w-2xl mx-auto h-96 bg-gray-100 rounded-md shadow-md border px-5">
            <span className="absolute top-3 left-1/2 -translate-x-1/2 font-bold text-gray-800">Quantidade de cartões: {cardsSize}</span>
            <div className="w-full h-full flex justify-center items-center">
                {children}
            </div>
            <div className="absolute bottom-0 left-0 p-5 w-full flex justify-center gap-x-5">
                <button className="bg-purple-500 p-2 border rounded-md shadow-md text-gray-100 font-black hover:bg-purple-600 transition-all duration-300">Memorizei</button>
                <button className="bg-gray-100 p-2 border rounded-md shadow-md text-gray-900 font-black hover:bg-gray-200 transition-all duration-300">Revisar mais</button>
            </div>
        </div>
    )
}

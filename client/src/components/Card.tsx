import { useState } from 'react';
import { ICardsProps } from '../interfaces/cardsProps';

export const Card = ({ term, translation }: ICardsProps) => {
    const [isActive, setIsActive] = useState(false);

    const flipCardAnimation = () => {
        setIsActive(!isActive);
    }

    return (
        <div
            className="relative w-full sm:w-fit">
            <div className={`card sm:w-52 w-full h-40 ${isActive ? 'flip' : ''}`} onClick={flipCardAnimation}>
                <div className={`absolute front bg-white text-black p-3 rounded-md flex justify-center text-center items-center font-black shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer ${isActive ? 'hidden' : ''}`}>
                    {term}
                </div>
                <div className={`absolute back bg-white text-black p-3 rounded-md flex justify-center text-center items-center font-black shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer ${isActive ? '' : 'hidden'}`}>
                    {translation}
                </div>
            </div>
        </div>
    )
}

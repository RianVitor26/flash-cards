import { useState } from 'react';

export const Card = () => {
    const [isActive, setIsActive] = useState(false);

    const flipCardAnimation = () => {
        setIsActive(!isActive);
    }

    return (
        <div className={`card w-52 h-40 relative ${isActive ? 'flip' : ''}`} onClick={flipCardAnimation}>
            <div className={`absolute front bg-gray-50 text-black rounded-md flex justify-center items-center font-black shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer ${isActive ? 'hidden' : ''}`}>
                Front
            </div>
            <div className={`absolute back bg-rose-500 text-gray-50 rounded-md flex justify-center items-center font-black shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer ${isActive ? '' : 'hidden'}`}>
                Back
            </div>
        </div>  
    )
}

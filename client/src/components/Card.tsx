import { useContext, useState } from 'react';
import { ICardsProps } from '../interfaces/cardsProps';
import { AuthContext } from '../contexts/AuthContext';
import { removeCard, updateCard } from '../services/cardsService';
import { useParams } from 'react-router-dom';
import { FaPen, FaTrash } from 'react-icons/fa';

export const Card = ({ term, translation, id }: ICardsProps) => {
    const [isActive, setIsActive] = useState(false);
    const [isElementHovered, setIsElementHovered] = useState<boolean>(false);

    const { user } = useContext(AuthContext)
    const { deckId } = useParams()

    const handleRemoveCard = async () => {
        if (user && deckId) {
            const userId = user.id
            await removeCard(userId, Number(deckId), id)
        }
    };

    const handleEditCard = async (updatedCard: ICardsProps) => {
        if (user && deckId) {
            const userId = user.id
            await updateCard(userId, Number(deckId), id, updatedCard)
        }
    };

    const flipCardAnimation = () => {
        setIsActive(!isActive);
    }

    return (
        <div
            onMouseOver={() => setIsElementHovered(true)}
            onMouseLeave={() => setIsElementHovered(false)}
            className="relative">
            <div className={`card w-52 h-40 ${isActive ? 'flip' : ''}`} onClick={flipCardAnimation}>
                <div className={`absolute front bg-gray-50 text-black p-3 rounded-md flex justify-center text-center items-center font-black shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer ${isActive ? 'hidden' : ''}`}>
                    {term}
                </div>
                <div className={`absolute back bg-gray-200 text-black p-3 rounded-md flex justify-center text-center items-center font-black shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer ${isActive ? '' : 'hidden'}`}>
                    {translation}
                </div>
            </div>
            <div
                className={`${isElementHovered ? "opacity-100" : "sm:opacity-0"} transition-opacity duration-500`}
            >
                <FaTrash
                    onClick={handleRemoveCard}
                    className="text-red-500 text-xl cursor-pointer absolute z-20 bottom-5 right-5 "
                />
                <FaPen
                    onClick={handleEditCard}
                    className="text-emerald-500 text-xl cursor-pointer absolute z-20 bottom-5 right-14"
                />
            </div>
        </div>
    )
}

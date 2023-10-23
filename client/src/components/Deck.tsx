import { Link, useParams } from "react-router-dom";
import { IDecksProps } from "../interfaces/decksProps";
import { FaPen, FaTrash } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { removeDeck } from "../services/decksService";

export const Deck = ({ id, name, description }: IDecksProps) => {
  const [isElementHovered, setIsElementHovered] = useState<boolean>(false);

  const { user } = useContext(AuthContext)
  const { deckId } = useParams()

  const handleRemoveDeck = async () => {
    if (user && deckId){
        const userId = user.id
        await removeDeck(userId, Number(deckId))
    }
  };

  const handleEditDeck = () => {
    console.log('edit deck');
  };

  return (
    <div
      onMouseOver={() => setIsElementHovered(true)}
      onMouseLeave={() => setIsElementHovered(false)}
      className="relative"
    >
      <Link to={`/decks/${id}/cards`} className="no-underline">
        <div className="card w-80 h-40 shadow-xl p-5 transform hover:-translate-y-3 hover:scale-105 hover:shadow-2xl transition-transform duration-300 cursor-pointer">
          <h2 className="font-black">{name}</h2>
          <p>{description}</p>
        </div>
      </Link>

      <div
        className={`${isElementHovered ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}
      >
        <FaTrash
          onClick={handleRemoveDeck}
          className="text-red-500 text-xl cursor-pointer absolute z-20 bottom-5 right-5 "
        />
        <FaPen
          onClick={handleEditDeck}
          className="text-emerald-500 text-xl cursor-pointer absolute z-20 bottom-5 right-14"
        />
      </div>
    </div>
  );
};

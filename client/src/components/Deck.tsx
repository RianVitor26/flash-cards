import { Link } from "react-router-dom"
import { IDecksProps } from "../interfaces/decksProps"

export const Deck = ({id, name, description}: IDecksProps) => {
    return (
        <Link to={`/decks/${id}/cards`}>
            <div className="card w-80 h-40 shadow-xl p-5 hover:-translate-y-3 hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer">
                <h2 className="font-black">{name}</h2>
                <p>{description}</p>
            </div>
        </Link>
    )
}

import { Link } from "react-router-dom"

export const Deck = () => {
    return (
        <Link to="/decks/id">
            <div className="card w-80 h-40 shadow-xl p-5 hover:-translate-y-3 hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer">
                <h2 className="font-black">Deck title</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
        </Link>
    )
}

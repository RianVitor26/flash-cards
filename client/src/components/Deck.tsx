import { Link } from "react-router-dom"

export const Deck = () => {
    return (
        <Link to="/decks/id"><div className="card w-96 h-48 bg-base-100 shadow-xl p-5 hover:-translate-y-3 hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer">
            <div>
                <h2 className="font-black">Deck title</h2>
                <p>If a dog chews shoes whose shoes does he choose? </p>
                <div className="card-actions justify-end mt-2">
                    <button className="btn btn-primary text-white font-bold bg-purple-600 rounded-md p-2">Abrir deck</button>
                </div>
            </div>
        </div>  </Link> 
    )
}

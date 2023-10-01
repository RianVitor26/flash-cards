export const Deck = () => {
    return (
        <div className="card w-96 h-48 bg-base-100 shadow-xl p-5">
            <div>
                <h2 className="font-black">Deck title</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end mt-2">
                    <button className="btn btn-primary text-white font-bold bg-purple-600 rounded-md p-2">Abrir deck</button>
                </div>  
            </div>
        </div>
    )
}

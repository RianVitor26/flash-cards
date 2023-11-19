import { Link } from "react-router-dom"
import { Footer } from "../components/Footer"
import { Navigation } from "../components/Navigation"

export const Home = () => {
  return (
    <>
      <Navigation />
      <header className="w-full h-screen break-words text-center flex items-center justify-center flex-col md:flex-row gap-y-5">
        <div className="w-full h-1/2 md:h-full md:w-1/2 flex justify-start flex-col gap-5 p-5 md:p-10 shadow-md rounded-r-lg  bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600">
          <h1 className="text-gray-100 text-3xl font-black text-center md:text-start">Flash Cards</h1>
          <h2 className="text-gray-300 font-bold text-md text-center md:text-start">Crie baralhos com o objetivo de memorizar o significado de algum termo do seu interesse.</h2>
          <div className="w-full flex justify-center md:justify-start">
            <Link className="w-fit" to="/decks"><button className="bg-blue-600 border px-3 py-3 text-white font-bold rounded-md">Memorizar!</button></Link>
          </div>
        </div>
        <div className="w-full h-1/2 md:h-full md:w-1/2 flex items-center justify-center md:p-10">
          <img className="w-full h-full object-contain" src="./home.svg" alt="Imagem do undraw de uma pessoa e um coração" />
        </div>
      </header>
      <Footer />
    </>
  )
}

import { Footer } from "../components/Footer"
import { Navigation } from "../components/Navigation"

export const Home = () => {
  return (
    <>
      <Navigation />
      <header className="w-full h-96 p-5 break-words text-center bg-purple-950 flex items-center justify-center flex-col gap-y-5">
        <h1 className="text-white text-4xl font-thin">Flash Cards</h1>
        <h2 className="text-gray-300 font-bold text-xl">Crie baralhos com o objetivo de memorizar o significado de algum termo do seu interesse.</h2>
      </header>
      <Footer />
    </>
  )
}

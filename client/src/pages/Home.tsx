import { Deck } from "../components/Deck"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"

export const Home = () => {
  return (
    <>
    <Header/>
    <main className="w-11/12 flex justify-center sm:justify-start mx-auto h-screen gap-5 flex-wrap">
        <Deck/>
    </main>
    <Footer/>
    </>
  )
}

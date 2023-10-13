import { Deck } from "../components/Deck"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { Navigation } from "../components/Navigation"

export const Home = () => {
  return (
    <>
    <Navigation/>
    <Header/>
    <main className="w-11/12 flex justify-center sm:justify-start mx-auto gap-5 flex-wrap">
        <Deck/>
    </main>
    <Footer/>
    </>
  )
}

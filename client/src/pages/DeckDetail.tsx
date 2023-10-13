import { Card } from "../components/Card"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { Modal } from "../components/Modal"
import { Navigation } from "../components/Navigation"

export const DeckDetail = () => {
  return (
    <>
      <Navigation/>
      <Header/>
      <main className="w-11/12 flex justify-center sm:justify-start mx-auto h-screen gap-x-3 flex-wrap">
      <Modal/>
      <Card />
      <Card />
      <Card />
      <Card />
      </main>
      <Footer/>
    </>
  )
}

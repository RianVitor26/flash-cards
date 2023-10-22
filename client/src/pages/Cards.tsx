import { useParams } from "react-router-dom"
import { Card } from "../components/Card"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { Modal } from "../components/Modal"
import { Navigation } from "../components/Navigation"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { ICardsProps } from "../interfaces/cardsProps"
import { findAllCards } from "../services/cardsService"

export const Cards = () => {
  const [cards, setCards] = useState<ICardsProps[] | []>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const { user } = useContext(AuthContext)
  const { deckId } = useParams()

  useEffect(() => {
    async function fetchCards() {
      try {
        if (user) {
          const userId = user.id;
          const cardsList = await findAllCards(userId, Number(deckId));
          setCards(cardsList);
        }
      } catch (error) {
        console.error("Erro ao buscar cards:", error);
      }
      finally {
        setIsLoading(false)
      }
    }

    fetchCards();
  }, [user, deckId]);

  return (
    <>
      <Navigation />
      <Header />
      <main className="w-11/12 flex justify-center sm:justify-start mx-auto h-screen gap-x-3 flex-wrap">
        <Modal />
        {isLoading ? <p>carregando...</p> : null}
        {cards.map(card => (
          <Card key={card.id} id={card.id} term={card.term} translation={card.translation} />
        ))}
      </main>
      <Footer />
    </>
  )
}

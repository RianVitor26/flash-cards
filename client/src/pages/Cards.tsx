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
      } finally {
        setIsLoading(false)
      }
    }

    fetchCards();
  }, [user, deckId, cards]);

  return (
    <>
      <Navigation />
      <Header />
      <main className="relative w-11/12 flex justify-center sm:justify-start mx-auto gap-3 flex-wrap">
        <Modal modalName="cartão"
          firstLabel="Termo"
          secondLabel="Tradução"
          firstPlaceholder="Insira um termo ou uma frase"
          secondPlaceholder="Insira a tradução ou sentido" />
        {isLoading ? <p>Carregando...</p> : null}
        {cards.length === 0 ? <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black/50 font-bold text-xl">Crie o seu primeiro cartão</p> : null}
        {cards.map(card => (
          <Card key={card.id} id={card.id} term={card.term} translation={card.translation} />
        ))}
      </main>
      <Footer />
    </>
  )
}

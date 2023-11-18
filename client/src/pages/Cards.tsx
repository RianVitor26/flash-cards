import { useParams } from "react-router-dom"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { Modal } from "../components/Modal"
import { Navigation } from "../components/Navigation"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { ICardsProps } from "../interfaces/cardsProps"
import { findAllCards } from "../services/cardsService"
import { Menu } from "../components/Menu"
import { Card } from "../components/Card"

export const Cards = () => {

  const [cards, setCards] = useState<ICardsProps[] | []>([
    {
      id: 1,
      term: 'ball',
      translation: 'bola'
    },
  ])
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
      <main className="relative w-11/12 flex justify-center items-center sm:justify-start mx-auto gap-5 flex-wrap sm:flex-nowrap">
        <Modal modalName="cartão"
          firstLabel="Termo"
          secondLabel="Tradução"
          firstPlaceholder="Insira um termo ou uma frase"
          secondPlaceholder="Insira a tradução ou sentido" />
        {isLoading ? <p>Carregando...</p> : null}
        {cards.length === 0 ? <p className="text-black/50 font-bold text-xl text-center">Crie o seu primeiro cartão</p> : null}
        <Menu cardsSize={cards.length}>
        {cards.map(card => (
            <Card key={card.id} id={card.id} term={card.term} translation={card.translation}/>
          ))}
        </Menu>
      </main>
      <Footer />
    </>
  )
}

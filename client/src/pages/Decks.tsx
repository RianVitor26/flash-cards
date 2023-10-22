import { useContext, useEffect, useState } from "react"
import { Deck } from "../components/Deck"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { Navigation } from "../components/Navigation"
import { findAllDecks } from "../services/decksService"
import { IDecksProps } from "../interfaces/decksProps"
import { AuthContext } from "../contexts/AuthContext"

export const Decks = () => {
  const [decks, setDecks] = useState<IDecksProps[]>([]);
  const [isLoading, setIsLoading] = useState(true)

  const { user } = useContext(AuthContext)

  useEffect(() => {
    async function fetchDecks() {
      try {
        if (user) {
          const userId = user.id;
          const decksList = await findAllDecks(userId);
          setDecks(decksList);
        }
      } catch (error) {
        console.error("Erro ao buscar decks:", error);
      } finally {
        setIsLoading(false)
      }
    }

    fetchDecks();
  }, [user]);
  return (
    <>
      <Navigation />
      <Header />
      <main className="w-11/12 flex justify-center sm:justify-start mx-auto gap-5 flex-wrap">
        {isLoading ? <p>carregando...</p> : null}
        {decks.map((deck) => (
          <Deck
            key={deck.id}
            id={deck.id}
            name={deck.name}
            description={deck.description}
          />
        ))}
      </main>
      <Footer />
    </>
  );
}

import { useContext, useEffect, useState } from "react"
import { Deck } from "../components/Deck"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { Navigation } from "../components/Navigation"
import { getAllDecks } from "../services/decks"
import { IDecksProps } from "../interfaces/decksProps"
import { AuthContext } from "../contexts/auth"

export const Home = () => {
  const [decks, setDecks] = useState<IDecksProps[]>([]);

  const { user } = useContext(AuthContext)

  useEffect(() => {
    async function fetchDecks() {
      try {
        if (user) {
          const userId = user.id;
          const decksData = await getAllDecks(userId);
          setDecks(decksData);
        }
      } catch (error) {
        console.error("Erro ao buscar decks:", error);
      }
    }

    fetchDecks();
  }, [user]);
  return (
    <>
      <Navigation />
      <Header />
      <main className="w-11/12 flex justify-center sm:justify-start mx-auto gap-5 flex-wrap">
        {decks.map((deck) => (
          <Deck
            key={deck.id}
            id={deck.id}
            title={deck.title}
            description={deck.description}
          />
        ))}
      </main>
      <Footer />
    </>
  );
}

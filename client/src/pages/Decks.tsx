import { useContext, useEffect, useState } from "react"
import { Deck } from "../components/Deck"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { Navigation } from "../components/Navigation"
import { findAllDecks } from "../services/decksService"
import { IDecksProps } from "../interfaces/decksProps"
import { AuthContext } from "../contexts/AuthContext"
import { Modal } from "../components/Modal"

export const Decks = () => {
  const [decks, setDecks] = useState<IDecksProps[]>([
    {
      id: 1,
      name: 'English',
      description: 'Deck para aprender inglês',
      category: 'Verbos'
    }
  ]);
  const [isLoading, setIsLoading] = useState<boolean>(true)

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
  }, [user, decks]);
  return (
    <>
      <Navigation />
      <Header />
      <main className="w-11/12 flex justify-center sm:justify-start mx-auto gap-5 flex-wrap">
        <Modal modalName="baralho"
          firstLabel="Nome"
          secondLabel="Descrição"
          firstPlaceholder="Insira o nome ou o tipo do baralho"
          secondPlaceholder="Para o que serve esse baralho" />

        {isLoading ? <p>carregando...</p> : null}
        {decks.length === 0 ? <p className="text-black/50 font-bold text-xl">Crie o seu primeiro baralho</p>: null}
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

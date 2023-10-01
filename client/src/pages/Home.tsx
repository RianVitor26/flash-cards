import { Deck } from "../components/Deck"

export const Home = () => {
  return (
    <div className="w-11/12 mx-auto h-screen flex justify-center gap-5 flex-wrap">
        <Deck/>
        <Deck/>
        <Deck/>
        <Deck/>
    </div>
  )
}

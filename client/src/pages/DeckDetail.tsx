import { Card } from "../components/Card"
import { Modal } from "../components/Modal"

export const DeckDetail = () => {
  return (
    <div className="w-11/12 pt-5 flex justify-center mx-auto gap-5 flex-wrap">
      <Modal/>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  )
}

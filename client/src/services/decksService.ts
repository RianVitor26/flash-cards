import { IDecksProps } from "../interfaces/decksProps"
import { api } from "./config"

export const  findAllDecks = async (userId: number): Promise<IDecksProps[]> => {
    const decks = await api.get(`/users/${userId}/decks`)
    return decks.data
}
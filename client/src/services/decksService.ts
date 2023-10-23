import { IDecksProps } from "../interfaces/decksProps"
import { api } from "./config"

export const createDeck = async (userId: number, newDeck: IDecksProps) => {
    const createdDeck = await api.post(`/users/${userId}/decks`, newDeck)
    return createdDeck.data
}

export const findAllDecks = async (userId: number): Promise<IDecksProps[]> => {
    const decks = await api.get(`/users/${userId}/decks`)
    return decks.data
}

export const findOneDeck = async (userId: number, deckId: number): Promise<IDecksProps> => {
    const deck = await api.get(`/users/${userId}/decks/${deckId}`)
    return deck.data
}

export const updateDeck = async (userId: number, deckId: number): Promise<IDecksProps> => {
    const updatedDeck = await api.put(`/users/${userId}/decks/${deckId}`)
    return updatedDeck.data
}

export const removeDeck = async (userId: number, deckId: number): Promise<IDecksProps> => {
    return await api.delete(`/users/${userId}/decks/${deckId}`)
}
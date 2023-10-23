import { ICardsProps } from '../interfaces/cardsProps'
import { api } from './config'

export const createCard = async (userId: number, deckId: number, newCard: ICardsProps) => {
    return await api.post(`users/${userId}/decks/${deckId}/cards`, newCard)
}

export const findAllCards = async (userId: number, deckId: number) => {
    const cards = await api.get(`users/${userId}/decks/${deckId}/cards`)
    return cards.data
}

export const findOneCard = async (userId: number, deckId: number, cardId: number) => {
    const card = await api.get(`users/${userId}/decks/${deckId}/cards/${cardId}`)
    return card.data
}

export const updateCard = async (userId: number, deckId: number, cardId: number, updatedCard: ICardsProps) => {
    const card = await api.put(`users/${userId}/decks/${deckId}/cards/${cardId}`, updatedCard)
    return card.data
}

export const removeCard = async (userId: number, deckId: number, cardId: number) => {
    return await api.delete(`users/${userId}/decks/${deckId}/cards/${cardId}`)
}

